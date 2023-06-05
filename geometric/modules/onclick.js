function onclick(element) {
  const star = document.querySelector(`.star${element.objectiveNum}`);
  const display = document.createElement('div');
  display.classList.add(`display${element.objectiveNum}`);
  display.textContent = `${element.objective}: ${element.objectiveInfo}.`;

  star.addEventListener('click', (event) => {
    event.preventDefault();
    star.insertAdjacentElement('afterend', display);
  });

  star.addEventListener('dblclick', (event) => {
    event.preventDefault();
    const childDel = document.querySelector(`.display${element.objectiveNum}`);
    childDel.remove();
  });
}

export default onclick;
