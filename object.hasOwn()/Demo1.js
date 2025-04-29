const object1 = {
     prop: "exist"
};
//console.log(Object.hasOwn(objectName, Propert of a object));
console.log(Object.hasOwn(object1, "prop"));

console.log(Object.hasOwn(object1, "toString"));

console.log(Object.hasOwn(object1, "undeclaredPropetyValue"));