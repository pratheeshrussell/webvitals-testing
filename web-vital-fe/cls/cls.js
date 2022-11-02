function calculateClSManually() {
    // ONLY WORKS WITH THIS CASE
    // JUST FOR UNDERSTANDING
    console.log('====Predicting CLS===');   
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const area = width * height;
    // height is multiplied by total vh % of shifted element
    // width is multiplied be 0.5 -- col-6
    const unstableElementArea = (0.7 * height) * (width * 0.5 );
    const impactFraction = unstableElementArea /area;

    // calc distance fraction
    const maxDimension = width > height ? width :height;
    // The % moved down will be 25vh -- ie., image
    const distanceFraction = (0.25 * height) /maxDimension;
    
    console.log('Impact Fraction:', impactFraction);
    console.log('Distance Fraction:', distanceFraction);
    console.log('CLS:', (impactFraction * distanceFraction));
    console.log('=====================');
}

function calculateClsWithObserver() {
    // REFER https://web.dev/cls/#measure-cls-in-javascript
    let clsValue = 0;
    let clsEntries = [];

    let sessionValue = 0;
    let sessionEntries = [];

    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            // Only count layout shifts without recent user input.
            if (!entry.hadRecentInput) {
                const firstSessionEntry = sessionEntries[0];
                const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

                // If the entry occurred less than 1 second after the previous entry and
                // less than 5 seconds after the first entry in the session, include the
                // entry in the current session. Otherwise, start a new session.
                if (sessionValue &&
                    entry.startTime - lastSessionEntry.startTime < 1000 &&
                    entry.startTime - firstSessionEntry.startTime < 5000) {
                    sessionValue += entry.value;
                    sessionEntries.push(entry);
                } else {
                    sessionValue = entry.value;
                    sessionEntries = [entry];
                }

                // If the current session value is larger than the current CLS value,
                // update CLS and the entries contributing to it.
                if (sessionValue > clsValue) {
                    clsValue = sessionValue;
                    clsEntries = sessionEntries;

                    // Log the updated value (and its entries) to the console.
                    console.log('Calculating with PerformanceObserver')
                    console.log('CLS:', clsValue);
                }
            }
        }
    }).observe({ type: 'layout-shift', buffered: true });
}