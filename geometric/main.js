import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import onDocumentMouseDown from './modules/mouseDown';
import handleSubmit from './modules/handleSubmit';
import resize from './modules/resize';
import backgroundLoader from './modules/backgroundLoader';
import orbitSet from './modules/orbitSet';
import camReset from './modules/camReset';

const scene = new THREE.Scene();
// const loader = new FBXLoader(); // star model remains unused
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

backgroundLoader(scene);
resize(renderer);
camReset(camera);
orbitSet(camera, renderer);

const numArray = [];
const raycaster = new THREE.Raycaster();

document.getElementById('submitbtn').addEventListener('click', (event) => {
  handleSubmit(event, numArray, scene);
});

document.addEventListener('mousedown', (event) => {
  onDocumentMouseDown(event, camera, scene, raycaster);
}, false);

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
