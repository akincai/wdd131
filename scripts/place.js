// using metric units Celsius and km/h
const temp = 13;
const windSpeed = 3;
let windChill = 0;

const tempVal = document.querySelector("#temp-val");
const wsVal = document.querySelector("#ws-val");
const wcVal = document.querySelector("#wc-val");

function calculateWindChill(temperature, wind) {
    return 13.12 + .6215 * temperature - 11.37*wind**.16 + .3965*temperature*wind**.16;
}

if (temp <= 10 && windSpeed > 4.8)
    windChill = calculateWindChill(temp, windSpeed);

tempVal.textContent = `${temp}`;
wsVal.textContent = `${windSpeed}`;
wcVal.textContent = windChill.toFixed(1);

