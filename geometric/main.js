import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { onDocumentMouseDown } from './modules/mouseDown';
import { handleSubmit } from './modules/handleSubmit';
import { resize } from './modules/resize';


const scene = new THREE.Scene();
const loader = new FBXLoader(); // star model remains unused
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
const spaceText = new THREE.TextureLoader().load('./images/space.jpg');
scene.background = spaceText;

resize(renderer);


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
  resize(renderer);
  requestAnimationFrame( animate );
};

animate();