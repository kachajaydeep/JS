const listitems = document.querySelectorAll("li");

function toggle(e) {
     if (!e.target.className) {
          e.target.className = "done";
     }
     else {
          e.target.className = "";
     }
}

listitems.forEach((item) => {
     item.addEventListener("click", toggle);
});