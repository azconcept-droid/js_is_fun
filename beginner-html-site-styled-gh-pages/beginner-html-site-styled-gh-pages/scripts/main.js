/* PRACTICE EXAMPLES
//Hello World
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Event Listener
const myHtml = document.querySelector('html');
myHtml.addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });

//Event listner with arrow function 
const myHTML = document.querySelector('img');
myHTML.addEventListener('click', () => {
    alert('Ouch! I am an image!');
});
*/

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');

    if (!myName) {
            setUserName();
        } else {
            localStorage.setItem('name', myName);
            myHeading.textContent = `Mozilla is cool, ${myName}`;
        }
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }