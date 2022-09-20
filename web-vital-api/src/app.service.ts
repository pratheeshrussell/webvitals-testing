import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      endpoints: {
        '/blocking-resource/js': {
          description: 'provides a JS script with a delay',
          params: {
            delay: 'time in ms',
          },
        },
        '/blocking-resource/image': {
          description: 'provides a base64 encoded image with a delay',
          params: {
            delay: 'time in ms',
          },
        },
        '/blocking-resource/content': {
          description: 'provides a paragraph with a delay',
          params: {
            delay: 'time in ms',
          },
        },
      },
    };
  }
}
