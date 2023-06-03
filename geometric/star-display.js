export function starDisplay(numArray) {
    const starContainer = document.createElement("ul");
    const display = document.querySelector(".text");

    display.appendChild(starContainer);

    if (numArray == []){
        starContainer.textContent = "nothing to display";
    }
    starContainer.textContent = "";
    numArray.forEach(star => {
        var star = document.createElement("li");
        starContainer.appendChild(star);
        star.textContent = `${star}`
    });
};