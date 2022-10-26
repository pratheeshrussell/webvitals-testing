function calculateSIRough(){
  // Only for this case
  const time = [0, 0.2, 1.2, 2.2];
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
  console.log('If it is wrong, adjust time and percent');
}
calculateSIRough();