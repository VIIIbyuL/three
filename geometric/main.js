import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});



renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

camera.position.set(0,0,0);

renderer.render(scene, camera);

// const moontext = new THREE.TextureLoader().load('moon.jpg');

// const geometry = new THREE.SphereGeometry( 10, 64, 32 ); 
// const material = new THREE.MeshStandardMaterial( { map: moontext} ); 
// const sphere = new THREE.Mesh( geometry, material ); 

// scene.add( sphere );


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
  constructor(objective, objectiveInfo, objectiveNum) {
    this.objective = objective;
    this.objectiveInfo = objectiveInfo;
    this.objectiveNum = objectiveNum;
  }
}

var objective;
var objectiveInfo;
var objectiveNum = 0;
const numArray = [];

document.getElementById("submitbtn").addEventListener("click", handleSubmit);
document.getElementById("removeRec").addEventListener("click", handleRem);

function handleRem() {
  if (numArray.length === 0) {
    alert("Nothing to remove. Try again.");
    return;
  }

  const starNum = numArray.pop();

  // Find the star with the matching value
  let starToRemove = null;

  scene.traverse(function (object) {
    if (object.userData !== undefined && object.userData.value === starNum) {
      starToRemove = object;
    }
  });

  // Remove the star if found
  if (starToRemove) {
    scene.remove(starToRemove);
    console.log("Removal of star with value " + starNum + " success");
  } else {
    console.log("Star with value " + starNum + " not found");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const objectiveInput = document.getElementById("obj");
  const objectiveInfoInput = document.getElementById("desc");

  const objective = objectiveInput.value;
  const objectiveInfo = objectiveInfoInput.value;
  const objectiveNum = numArray.length + 1;

  if (objective === "" || objectiveInfo === "") {
    alert("Please enter values for objective and objective info");
    return;
  }

  var userStar = new Star(objective, objectiveInfo, objectiveNum);
  numArray.push(objectiveNum);

  objectiveInput.value = "";
  objectiveInfoInput.value = "";

  addStar(userStar);
}

function addStar(userStar) {
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.2, // Adjust the intensity as desired
  });
  const star = new THREE.Mesh(geometry, material);
  star.userData.value = userStar.objectiveNum;

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  console.log(`star is ${userStar.objective} and ${star.userData.value}`);
  scene.add(star);
}



function animate() {
  renderer.render( scene, camera);
  requestAnimationFrame( animate );
}

animate();