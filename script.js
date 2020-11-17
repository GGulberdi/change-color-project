//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const hexColors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let bttn1 = document.getElementById('button1').addEventListener('click', btn1)
let bttn2 = document.getElementById('button2').addEventListener('click', btn2)
const h1 = document.querySelector('h1');

function btn1  ()  {
var colorIndex = Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor = colors[colorIndex] ;
}

function colorHex () {
return  Math.floor(Math.random()*hexColors.length);
}

function btn2 () {
const colorCode = `${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}${hexColors[colorHex()]}`;
document.body.style.backgroundColor = '#' + colorCode; 
h1.innerHTML = '#' + colorCode;
let reverseColor = colorCode.split("").reverse().join("");
console.log(reverseColor);
h1.style.color = "#" + reverseColor;
}


