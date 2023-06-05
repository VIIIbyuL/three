import * as THREE from 'three';
export function backgroundLoader(scene) {
    const spaceText = new THREE.TextureLoader().load('./images/space.jpg');
    scene.background = spaceText;
};
