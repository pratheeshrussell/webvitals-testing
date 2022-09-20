import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockingResourceController } from './blocking-resource/blocking-resource.controller';
import { BlockingResourceService } from './blocking-resource/blocking-resource.service';

@Module({
  imports: [],
  controllers: [AppController, BlockingResourceController],
  providers: [AppService, BlockingResourceService],
})
export class AppModule {}
