function calculateSIRough(){
  //the heading is painted first(30%)
  const fcp = 0.2;
  //this is an assumption -considering img loads after a second
  const imgLoadTime = fcp + 1;
  //since we are loading the largest content last(45%) so lcp
  const lcp = 2.2;
  // Only for this case
  const time = [0, fcp, imgLoadTime, lcp];
  // this is how the page is set to load
  // 0% -> 30% -> 55% -> 100%
  const percent = [0, 0.3, 0.55, 1];
  let si = 0;
  for(let i=1;i<time.length;i++){
    let iTime = time[i-1];
    let fTime = time[i];
    let dt = (fTime - iTime);
    console.log(`${dt} * (1-${percent[i-1]})`);
    si += dt * (1-percent[i-1]);
  }
  console.log('SI should be around ', si);
  console.log('If it is wrong, adjust time(based on fcp,lcp) and percent');
}
calculateSIRough();