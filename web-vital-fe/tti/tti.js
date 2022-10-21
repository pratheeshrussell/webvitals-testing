const correctionFactor = 0.999;
function ttilongTask(ms = 49) {
    let start = (window.performance.now());
    let end = start;
    while((end - start) < (ms+correctionFactor)){
        end = (window.performance.now());
    }

}

function runLongTask() {
    ttilongTask(2000);
    //setTimeout(() => ttilongTask(200),1800);
}

function runLongSplitTask() {
    ttilongTask(100);
    setTimeout(() => ttilongTask(150),700);

    setTimeout(() => ttilongTask(30),1000);
    
    setTimeout(() => ttilongTask(90),1200);

    setTimeout(() => ttilongTask(45),1500);
    
    setTimeout(() => ttilongTask(300),1700);

    setTimeout(() => ttilongTask(30),2100);

    setTimeout(() => ttilongTask(30),2300);
    
}

function runLongCheatTask() {
    setTimeout(() => {
        let start, end;
        start = window.performance.now();
        ttilongTask(2000);
        end = window.performance.now();
        console.log('Cheat Task executed...');
        console.log(`Execution time: ${end - start} ms`);
    },5500);
}