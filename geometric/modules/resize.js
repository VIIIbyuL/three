function resize(renderer) {
  const canvas = document.querySelector('#bg');
  const formElement = document.getElementById('form');
  const rect = formElement.getBoundingClientRect();

  const value = (rect.right - rect.left);
  canvas.style.left = `${value}px`;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth - rect.right, window.innerHeight);
}

export default resize;
