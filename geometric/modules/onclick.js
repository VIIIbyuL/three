export function onclick(element) {
    const star = document.querySelector(`.star${element.objectiveNum}`);
    const display = document.createElement('div');
    display.classList.add(`display${element.objectiveNum}`);
    display.textContent = `${element.objective}: ${element.objectiveInfo}.`;

    star.addEventListener( 'click', function(event) {
        event.preventDefault();
        console.log(`star${element.objectiveNum} was clicked`);
        star.insertAdjacentElement('afterend', display);
    });

    star.addEventListener( 'dblclick', function(event){
        event.preventDefault();
        console.log(`star${element.objectiveNum} was double clicked`);
        let childDel = document.querySelector(`.display${element.objectiveNum}`)
        childDel.remove();
    });
};