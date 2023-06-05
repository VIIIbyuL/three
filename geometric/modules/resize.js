var canvas;
var formElement;
var rect;

export function resize(renderer) {
    canvas = document.querySelector('#bg');
    formElement = document.getElementById("form");
    rect = formElement.getBoundingClientRect();

    let value = (rect.right - rect.left);
    canvas.style.left = `${value}px`;

    renderer.setPixelRatio( window.devicePixelRatio);
    renderer.setSize(window.innerWidth - rect.right, window.innerHeight);
}

export {rect};