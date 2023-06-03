import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { starDisplay } from './star-display';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

const spaceText = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceText;



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
// document.getElementById("removeRec").addEventListener("click", handleRem);
//on hold until remove rem is difin

// holy motherrrrrrrrr this code was so harddddduhhhhh
document.addEventListener('mousedown', onDocumentMouseDown, false);
const raycaster = new THREE.Raycaster();

function onDocumentMouseDown(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const formElement = document.getElementById("form");
  const rect = formElement.getBoundingClientRect();

  // Check if the mouse coordinates intersect with the form element's bounding box
  if (
    mouse.x >= rect.left &&
    mouse.x <= rect.right &&
    mouse.y >= rect.top &&
    mouse.y <= rect.bottom
  ) {
    return; // Ignore clicks on the form
  }

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;

    if (clickedObject instanceof THREE.Mesh && clickedObject.userData.star !== undefined) {
      const starNum = clickedObject.userData.star;

      console.log('Star clicked:', starNum);
    }
  }
}

// function handleRem() {
//   if (numArray.length === 0) {
//     alert("Nothing to remove. Try again.");
//     return;
//   }

//   const starNum = numArray.pop();

//   // Find the star with the matching value
//   let starToRemove = null;

//   scene.traverse(function (object) {
//     let starr = object.userData.star;
//     if (starr !== undefined && starr.starNum === starNum) {
//       starToRemove = object;
//     }
//   });

//   // Remove the star if found
//   if (starToRemove) {
//     scene.remove(starToRemove);
   
  
//     console.log("Removal of star with value " + starNum + " success");
//   } else {
//     console.log("Star with value " + starNum + " not found");
//   }
// }

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
  numArray.push(userStar);

  // objectiveInput.value = "";
  // objectiveInfoInput.value = "";

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
  star.userData.star = userStar;

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  console.log(`star is ${userStar.objective} and ${star.userData.star}`);


  scene.add(star);
}




function animate() {
  renderer.render( scene, camera);

  requestAnimationFrame( animate );
}

  //displaycurrent stars rn here
starDisplay(numArray);
animate();