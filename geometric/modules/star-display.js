import onclick from './onclick';

function starDisplay(numArray) {
  const starContainer = document.createElement('ul');
  starContainer.classList.add('starContainer');
  const display = document.querySelector('.text');
  const array = numArray.map((obj) => ({ ...obj }));

  display.appendChild(starContainer);

  if (numArray.length === 0) {
    return;
  }

  const star = document.createElement('button');
  starContainer.appendChild(star);
  const element = array.pop();
  star.textContent = `Star Number: ${element.objectiveNum}`;
  star.classList.add(`star${element.objectiveNum}`);
  onclick(element);
}

export default starDisplay;
