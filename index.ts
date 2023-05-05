import myHTML from './index.html';
const myDiv = document.createElement('div');
myDiv.innerHTML = myHTML;
document.body.appendChild(myDiv);