# Web Vital Api
A NestJS app to check how delaying content in web vitals work. The following API are available

## blocking-resource
There are 4 endpoints for this API. All support the **delay** query param.

### js
Provides a JS script with a delay  (in milliseconds).

### blockingjs
Provides a JS script with a delay. This JS will take time to be processed. There is an additional parameter **processDelay** that delays the processing of the fetched JS in milliseconds.
Will emit the *blockingjs.start* and *blockingjs.done* events. You can listen to it by adding an EventListener
```
var start, end;
document.addEventListener('blockingjs.start', () => {
    start = window.performance.now();
});
document.addEventListener('blockingjs.done', () => {
    end = window.performance.now();
    console.log(`Execution time: ${end - start} ms`);
});
```

### image
Provides a base64 encoded image with a delay

### content
Provides a paragraph with a delay


## Running the app
```
npm run start:dev
```