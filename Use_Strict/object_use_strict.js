var Obj = {};
Object.defineProperty(Obj, "x", {value: 0,writable: false});
Obj.x = 3.14;

var Obj = {get x() {return 0}};
console.log();
