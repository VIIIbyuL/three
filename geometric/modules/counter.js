function setupCounter(element) {
  let counter = 0;

  const countDisplay = document.createElement("span"); // Create a <span> element
  element.appendChild(countDisplay); // Append the <span> element to the main element

  const updateCountDisplay = () => {
    countDisplay.textContent = `count is ${counter}`;
  };

  const setCounter = (count) => {
    counter = count;
    updateCountDisplay();
  };

  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export default setupCounter;
