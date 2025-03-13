console.log("-".repeat(20));
console.log("2- BOM");
console.log("-".repeat(20));

console.log("-- التكليفات --");
console.log("----------------------");

console.log("-- التكليف 01 --");
console.log("----------------------");

let newButt = document.createElement("button");
document.body.appendChild(newButt);
newButt.innerHTML = "Count";
    
newButt.addEventListener("click", function () {
    let msg = prompt("Print Number From – To", "5-20");

    let splitM = msg.split("-");

    let firstNumber = parseInt(splitM[0]);
    let secondNumber = parseInt(splitM[1]);

    let min = Math.min(firstNumber, secondNumber);

    let max = Math.max(firstNumber, secondNumber);

    for (let i = min; i <= max; i++) {

        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.innerHTML = i + "<br>";
        console.log(i);
    }
});

console.log("-- التكليف 02 --");
console.log("----------------------");


let popWindow = null;
var opPop;

document.getElementById("openPop").onclick = function () {
    
    opPop = setTimeout(() => {

        popWindow = window.open("", "Pop UP Window", "width=500px,height=500px;");

        popWindow.document.write(`<!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                    <meta charset="UTF-8">
                                    <title>Welcome Box</title>
                                    <style>
                                        body {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        height: 100vh;
                                        background-color: #f9f9f9;
                                        margin: 0;
                                        }

                                        .welcome-box {
                                        position: relative;
                                        background-color: #f4f4f4;
                                        padding: 30px 50px;
                                        border: 1px solid #ddd;
                                        border-radius: 4px;
                                        text-align: center;
                                        font-family: Arial, sans-serif;
                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                        }

                                        .welcome-box h2 {
                                        margin: 0 0 10px;
                                        font-size: 24px;
                                        font-weight: bold;
                                        }

                                        .welcome-box p {
                                        margin: 0;
                                        font-size: 16px;
                                        color: #444;
                                        }

                                        .close-btn {
                                        position: absolute;
                                        top: -10px;
                                        right: -10px;
                                        width: 25px;
                                        height: 25px;
                                        background-color: red;
                                        color: white;
                                        border: none;
                                        border-radius: 50%;
                                        font-size: 16px;
                                        font-weight: bold;
                                        cursor: pointer;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        }

                                        .close-btn:hover {
                                        background-color: darkred;
                                        }
                                    </style>
                                    </head>
                                    <body>

                                    <div class="welcome-box" id="welcomeBox">
                                        <button class="close-btn" onclick="document.getElementById('welcomeBox').style.display='none'">x</button>
                                        <h2>Welcome</h2>
                                        <p>Welcome To Elzero Web School</p>
                                    </div>

                                    </body>
                                    </html>
                                    `);
    }, 5000);
}

document.getElementById("closePop").onclick = function () {
  popWindow.close();
}


console.log("-- التكليف 03 --");
console.log("----------------------");

let newBut = document.createElement("button");
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(newBut);
newBut.innerHTML = "Start Count";

let count;

newBut.onclick = function () {
    let newDi = document.createElement("div");
    document.body.appendChild(newDi);
    newDi.innerHTML = 10;
   
    let count = newDi.innerHTML;
    
    countIn = setInterval(function () {

        count--;
        newDi.innerHTML = count;
        console.log(count);
            

        if (count === 5) {
    
            // console.log("-- التكليف 05 --");
            //  console.log("----------------------");
            window.open("https://elzero.org/", "_blank", "width=500px,height=500,left=500px,top=300px");
        }

        if (count === 0) {
            // console.log("-- التكليف 03 --");
            //  console.log("----------------------");
                
            clearInterval(countIn);
            

            // console.log("-- التكليف 04 --");
            //  console.log("----------------------");
                
            //location.assign("https://elzero.org/");
        }
        
    }, 1000);
}