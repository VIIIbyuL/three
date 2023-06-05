import { onclick } from "./onclick";
export function starDisplay(numArray) {
    const starContainer = document.createElement("ul");
    starContainer.classList.add('starContainer');
    const display = document.querySelector(".text");
    const array = numArray.map(obj => ({ ...obj }));

    display.appendChild(starContainer);

    console.log(`the length of numArray is ${numArray.length}`);

    if (numArray.length == 0){
        alert("nothing to display :(");
        console.log("nothing to display");
        return;
    };
 
    var star = document.createElement("button");
    starContainer.appendChild(star);
    let element =  array.pop();
    star.textContent = `Star Number: ${element.objectiveNum}`;
    star.classList.add(`star${element.objectiveNum}`)
    onclick(element);
};