const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");

     if (mySrc === "./images/firefox-icon.png") {
          myImage.setAttribute("src", "./images/programming-background-collage.jpg");
     }
     else {
          myImage.setAttribute("./images/firefox-icon.png");
     }
});


let mybutton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setMyName() {
     const UserInput = prompt("please Enter Somthing..");
     if (!UserInput) {
          setMyName();
     }
     else {
          localStorage.setItem("name", UserInput);
          myHeading.textContent = `Mozila is so good ${UserInput}`;
     }
}

if (!localStorage.getItem("name")) {
     setMyName();
}
else {
     const newname = localStorage.getItem("name");
     myHeading.textContent = `Mozila is so goodest ${newname}`;
}

mybutton.addEventListener("click", () => {
     setMyName();
})