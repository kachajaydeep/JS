import { PI, getCircumference, getArea, getVolume } from './message.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const Volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${Volume.toFixed(2)}cm^3`);

