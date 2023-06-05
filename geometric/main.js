import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { onDocumentMouseDown } from './modules/mouseDown';
import { handleSubmit } from './modules/handleSubmit';

const scene = new THREE.Scene();
const loader = new FBXLoader(); // star model remains unused
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
console.log("why")
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
const spaceText = new THREE.TextureLoader().load('./images/space.jpg');
scene.background = spaceText;

//could modulize this, all its really doing is resizing
const canvas = document.querySelector('#bg');
const formElement = document.getElementById("form");
const rect = formElement.getBoundingClientRect();
const width = window.innerWidth - rect.right;
let value = (rect.right - rect.left);
canvas.style.left = `${value}px`;

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( width, window.innerHeight);


// can adjust cam pos
camera.position.set(0,0,0);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

const minDistance = 20;
const maxDistance = 120;

controls.minDistance = minDistance;
controls.maxDistance = maxDistance;

var objective;
var objectiveInfo;
var objectiveNum = 0;
const numArray = [];
const raycaster = new THREE.Raycaster();

document.getElementById("submitbtn").addEventListener("click", function(event){
  handleSubmit(event, numArray, scene );
});
document.addEventListener('mousedown', function(event) {
  onDocumentMouseDown(event, camera, scene, raycaster);
}, false);

function animate() {
  renderer.render( scene, camera);
  requestAnimationFrame( animate );
};

animate();