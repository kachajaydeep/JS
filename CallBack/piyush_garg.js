function add(a, b, cb) {
     let result = a + b;
     cb(result);

     return () => console.log(result);
     
}

const resultFunction = add(5, 6, () => {});
resultFunction();