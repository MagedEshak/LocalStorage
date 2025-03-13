console.log("-".repeat(20));
console.log("Local Storage");
console.log("-".repeat(20));

//Set

// window.localStorage.setItem("backgroundColor", "#ff5722");
// window.localStorage.fontSize = "30px";
// window.localStorage["color"]= "#fff";

// window.sessionStorage.setItem("backgroundColor", "#ff5722");
// window.sessionStorage.fontSize = "30px";
// window.sessionStorage["color"] = "#fff";

Get
document.body.style.backgroundColor = window.localStorage.getItem("backgroundColor");
document.body.style.fontSize = window.localStorage.fontSize;
document.body.style.color = window.localStorage["color"];

document.body.style.backgroundColor = window.sessionStorage.getItem("backgroundColor");
document.body.style.fontSize = window.sessionStorage.fontSize;
document.body.style.color = window.sessionStorage["color"];


//Remove one item
//window.localStorage.removeItem("backgroundColor");

//window.sessionStorage.removeItem("backgroundColor");

//Clear All Items in Local Storage
//window.localStorage.clear();

//Get Key

console.log(window.localStorage.key(1));