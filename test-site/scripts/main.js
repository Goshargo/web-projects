//Changing the image
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/m.png") {
    myImage.setAttribute("src", "./images/madzia.png");
  } else {
    myImage.setAttribute("src", "./images/m.png");
  }
};

function chBackcolor(color) {
document.body.style.backgroundColor = color;
}

/*Poking
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/

//Name on the site
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla who? Hi ${myName}!`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla who? Hi ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}


let myVariable = document.querySelector("h1");
alert("hello!");

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

document.write(multiply(4, 7));
document.write("\n"+multiply(20, 20));
document.write("\n"+multiply(0.5, 3));

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
*/