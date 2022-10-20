import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/constants/constants';

@Injectable()
export class BlockingResourceService {
  getJS(delay: number): Observable<string> {
    const returnContent = `console.log('hello world')`;
    return this.createObservable(returnContent, delay);
  }

  getBlockingJS(delay: number, processDelay: number): Observable<string> {
    const returnContent = `
      const ms = ${processDelay};
      const busyTime = Date.now() + ms;
      const startEvent = new Event('blockingjs.start');
      const endEvent = new Event('blockingjs.done');
      document.dispatchEvent(startEvent);
      while(busyTime >= Date.now()){}
      document.dispatchEvent(endEvent);
    `;
    return this.createObservable(returnContent, delay);
  }

  getImage(delay: number): Observable<string> {
    // image is in public folder
    const returnContent = 'butterfly.jpg';
    return this.createObservable(returnContent, delay);
  }

  getContent(delay: number): Observable<string> {
    const returnContent = AppConstants.content;
    return this.createObservable(returnContent, delay);
  }

  private createObservable<T>(returnContent: T, delay: number): Observable<T> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(returnContent);
        subscriber.complete();
      }, delay);
    });
  }
}
