import * as THREE from "three";

function backgroundLoader(scene) {
  const spaceText = new THREE.TextureLoader().load("./images/space.jpg");
  // eslint-disable-next-line no-param-reassign
  scene.background = spaceText;
}

export default backgroundLoader;
