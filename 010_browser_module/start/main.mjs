import { helloFromSub } from "./sub.mjs";
import isOdd from './node_modules/is-odd/index.js';
// const myModule = require('./sub.js');
helloFromSub();
const oddy = isOdd(3);
console.log(oddy);