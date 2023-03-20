// accessing variables
let dc = document.querySelector(".dynamic-content");
let btn = document.getElementById("add");
let inp = document.getElementById("input");

// function
function handler() {
    let pg = document.createElement("p");

    if (inp.value.length > 0) {
        pg.innerText = inp.value;
    } else {
        alert("Please enter an item");
    }

    dc.appendChild(pg);
}

// assigning click event
btn.addEventListener("click", handler);