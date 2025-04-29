"use strict";
var x = 1;

Object.hasOwn(globalThis, "x");
delete globalThis.x;
delete x;
