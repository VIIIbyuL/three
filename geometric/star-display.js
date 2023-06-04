export function starDisplay(numArray) {
    const starContainer = document.createElement("ul");
    const display = document.querySelector(".text");
    const array = numArray.map(obj => ({ ...obj }));

    display.appendChild(starContainer);

    console.log(`the length of numArray is ${numArray.length}`);
    if (numArray.length == 0){
        alert("nothing to display :(");
        console.log("nothing to display");
        return;
    }

    array.forEach(star => {
        console.log(`star is ${star.objectiveNum}`)
    });
 
    var star = document.createElement("li");
    starContainer.appendChild(star);
    let element =  array.pop();
    
    
    star.textContent = `Star Number: ${element.objectiveNum}`;


    console.log("starDisplay has been reached.");
};