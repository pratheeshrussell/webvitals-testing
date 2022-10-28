new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
        console.log('FCP:', entry.startTime);
        console.log('details: ',entry)
    }
}).observe({type: 'paint', buffered: true});