import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const moontext = new THREE.TextureLoader().load('moon.jpg');

const geometry = new THREE.SphereGeometry( 10, 64, 32 ); 
const material = new THREE.MeshStandardMaterial( { map: moontext} ); 
const sphere = new THREE.Mesh( geometry, material ); 

scene.add( sphere );


const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(ambientlight);

const controls = new OrbitControls(camera, renderer.domElement);

// Set the desired minimum and maximum distance
const minDistance = 20;
const maxDistance = 120;

// Configure the OrbitControls
controls.minDistance = minDistance;
controls.maxDistance = maxDistance;


class Star {
  constructor(objective, objectiveInfo) {
    this.objective = objective;
    this.objectiveInfo = objectiveInfo;
  }
}

var objective;
var objectiveInfo;

document.getElementById("submitbtn").addEventListener("click", handleClick());

function handleClick() {
  objective = document.getElementById("obj").value;
  objectiveInfo = document.getElementById("desc").value;

  var userStar = new Star(objective, objectiveInfo);

  addStar(userStar);

}

function addStar(userStar) {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.2, // Adjust the intensity as desired
  });
  const star = new THREE.Mesh(geometry, material);
  star.userData.value = userStar;

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
}

function animate() {
  requestAnimationFrame( animate );


  renderer.render( scene, camera);
}

animate();