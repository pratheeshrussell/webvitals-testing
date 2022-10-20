function tbtlongTask(ms = 49) {
    const busyTime = Date.now() + ms;
    while (busyTime >= Date.now()) { }
}

function runLongTask() {
    let start, end;
    start = window.performance.now();
    for (let i = 0; i <= 10; i++) {
        const delay=i*5;
        if (i == 10 || i == 5 || i == 3) {
            tbtlongTask(100);
            //setTimeout(() => tbtlongTask(100),delay);
        } else {
            tbtlongTask();
            //setTimeout(() => tbtlongTask(),delay);
        }
    }
    end = window.performance.now();
    console.log('Task executed...');
    console.log(`Execution time: ${end - start} ms`);
}