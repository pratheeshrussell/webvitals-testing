# Web Vital Api
A NestJS app to check how delaying content in web vitals work. The following API are available

## blocking-resource
There are 3 endpoints for this API. All support the **delay** query param.

### js
Provides a JS script with a delay.

### image
Provides a base64 encoded image with a delay

### content
Provides a paragraph with a delay


## Running the app
```
npm run start:dev
```