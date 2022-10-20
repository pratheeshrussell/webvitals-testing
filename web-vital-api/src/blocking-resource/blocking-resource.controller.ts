import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { BlockingResourceService } from './blocking-resource.service';

@Controller('blocking-resource')
export class BlockingResourceController {
  constructor(private blockingService: BlockingResourceService) {}

  @Get('js')
  @Header('Content-Type', 'application/javascript')
  async getJsResource(@Query() params: any) {
    let delay = 1000;
    if (params && params.delay) {
      delay = parseInt(params.delay);
    }
    const r = await firstValueFrom(this.blockingService.getJS(delay));
    return r;
  }

  @Get('blockingjs')
  @Header('Content-Type', 'application/javascript')
  async getBlockingJsResource(@Query() params: any) {
    let delay = 0;
    let processDelay = 0;
    if (params && params.delay) {
      delay = parseInt(params.delay);
    }
    if (params && params.processDelay) {
      processDelay = parseInt(params.processDelay);
    }
    const r = await firstValueFrom(
      this.blockingService.getBlockingJS(delay, processDelay),
    );
    return r;
  }

  @Get('image')
  async getImgResource(@Query() params: any, @Res() res: Response) {
    let delay = 1000;
    if (params && params.delay) {
      delay = parseInt(params.delay);
    }
    const r = await firstValueFrom(this.blockingService.getImage(delay));
    res.setHeader('Content-Disposition', 'attachment; filename=' + r);
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'application/octet-stream');
    return res.sendFile(r, { root: 'public' });
  }

  @Get('content')
  @Header('Content-Type', 'text/html; charset=UTF-8')
  async getTextContentResource(@Query() params: any) {
    let delay = 1000;
    if (params && params.delay) {
      delay = parseInt(params.delay);
    }
    const r = await firstValueFrom(this.blockingService.getContent(delay));
    return r;
  }
}
