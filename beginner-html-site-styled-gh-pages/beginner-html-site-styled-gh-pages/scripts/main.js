/*Hello World*/
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*Event Listener*/
const myHtml = document.querySelector('html');
myHtml.addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });

/*Event listner with arrow function */
const myHTML = document.querySelector('img');
myHTML.addEventListener('click', () => {
    alert('Ouch! I am an image!');
});
  