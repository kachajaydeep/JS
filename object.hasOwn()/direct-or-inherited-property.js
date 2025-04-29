const example = {};

example.property = "exist";

console.log(Object.hasOwn(example, "exist"));
console.log(Object.hasOwn(example, "toString"));
console.log(Object.hasOwn(example, "hasOwnProperty"));


console.log("It is a inherited Property shown below.");
console.log("exist" in example);
console.log("toString" in example);
console.log("hasOwnProperty" in example);