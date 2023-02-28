
const colors = ['blue', 'green', 'red']
// anon callback
colors.forEach(function(color) {console.log(color)});

// named callback
const forEachColor = (color) => {
    // console.log(color)
}
// colors.forEach(forEachColor)

colors.forEach(function(color, idx) {
    // console.log(`${idx} - ${color}`);
});

const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 }
];

const filterCars = (car) => {
  if(car.mileage / car.yrsOld > 20000 ){
    return true
  }
}

const wellDrivenCars = cars.filter(filterCars)
wellDrivenCars.forEach(car => console.log(car))


const lightSequence = [
  {color: 'red', time: 1000},
  {color: 'orange', time: 1000},
  {color: 'yellow', time: 1000}
];
  

// Cache the divs for the lights
const lightEls = document.querySelectorAll('main > div');


// Variable to track the current light
let curLightIdx = 0;  // Start with red object

function renderLight(cb) {
  // First, turn off all lights
  lightEls.forEach(el => el.style.backgroundColor = 'black');
  // Next, turn on the current light
  lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
  // Invoke the callback when this light's time has expired
  setTimeout(cb, lightSequence[curLightIdx].time);
}

function renderLightSequence() {
  renderLight(renderLightSequence);
  // Increment and reset to zero when 3 is reached
  curLightIdx = ++curLightIdx % 3;
}
  
// Make it start!
renderLightSequence();
  