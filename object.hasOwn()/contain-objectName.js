const example = {};
console.log(Object.hasOwn(example, "prop"));

example.prop = "exist";
console.log(Object.hasOwn(example, "prop"));

example.prop = null;
console.log(Object.hasOwn(example, "prop"));

example.prop = undefined;
console.log(Object.hasOwn(example, "prop"));