new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', entry.startTime);
      console.log('details: ',entry)
    }
}).observe({type: 'largest-contentful-paint', buffered: true});