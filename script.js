// Find ID container
const container = document.querySelector('#container');

// Create new div "content" under container
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Create new paragraph under content
const para = document.createElement("p");
para.textContent = 'Hey I\'m red!';
content.appendChild(para);

// Create new h3 header under content
const headerThree = document.createElement('h3');
headerThree.textContent = 'Hey I\'m blue h3!';
headerThree.style.color = 'blue';
content.appendChild(headerThree);

// Create new div "newDiv" under container
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.border = '3px solid black'

// Create new h1 header under newDiv
const newh1 = document.createElement('h1');
newh1.textContent = 'I\'m in a div';
newDiv.appendChild(newh1);

// Create new paragraph under newDiv
const newp = document.createElement('p');
newp.textContent = 'ME TOO!';
newDiv.appendChild(newp);

// Add newDiv under container
container.appendChild(newDiv);

// Example Alert Function
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHOD 3
var buttonListener = document.querySelector('#btn');
buttonListener.addEventListener('click', function(e){
    e.target.style.background = 'blue'
  })
