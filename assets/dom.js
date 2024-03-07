const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// You could clone link para by doing something like this and inserting the new para instead
// var newPara = linkPara.cloneNode(true);

sect.appendChild(linkPara);
linkPara.parentNode.removeChild(linkPara);

para.setAttribute('class', 'highlight');