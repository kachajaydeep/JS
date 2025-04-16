for (let i = 0; i <= 5; i++) {
     var arrow="";
    for(let j = 0; j<=i; j++){
     arrow += "* ";
    }
    console.log(arrow);
}

for (let k = 1; k <= 4; k++) {
     var arrow = "";
     for(let l = 5; l >= k; l--){
          arrow += "* ";
     }
     console.log(arrow);
}