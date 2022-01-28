// Question 1

const header = document.querySelector('h3');

header.innerHTML = 'Hello';

// Question 2

const headingH4 = document.querySelectorAll('h4');

console.log(headingH4);

for (let i = 0; i < headingH4.length; i++) {
  headingH4[i].style.marginBottom = '-20px';
}

// Question 3

const headingTwo = document.querySelector('.two');

headingTwo.style.background = 'red';

// Question 4

const firstParagraph = document.querySelector('p');

firstParagraph.style.fontSize = '24px';
firstParagraph.style.color = 'blue';

// Question 5

const thirdParagraph = document.querySelectorAll('p.three');
console.log(thirdParagraph);

thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;
console.log(thirdParagraph);

// Question 6

const addParagraph = document.querySelector('.content');
console.log(addParagraph);

addParagraph.innerHTML += '<p>Emil</p>';

// Question 7

const addClass = document.querySelectorAll('.content p');
console.log(addClass);

for (let i = 0; i < addClass.length; i++) {
  addClass[i].classList.add('content-item');
}

// Question 8

const listItem = document.querySelector('#services');
listItem.innerHTML = '<li>Hello</li>' + listItem.innerHTML;

// Question 9

const removeUl = document.querySelector('ul');

removeUl.classList.remove('service-list');

console.log(removeUl);

// Question 10

const divHide = document.querySelector('#hide');

divHide.style.visibility = 'hidden';

console.log(divHide);
