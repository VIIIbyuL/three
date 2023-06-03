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

const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(10,10,10);

const lighthelper = new THREE.PointLightHelper(pointlight, 1);
const gridhelper = new THREE.GridHelper(200, 50);
scene.add(lighthelper, gridhelper)

const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight, ambientlight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.2, // Adjust the intensity as desired
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
}

Array(300).fill().forEach(addStar);

function animate() {
  requestAnimationFrame( animate );

  pointlight.rotation

  sphere.rotation.x += 0.0;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.0;

  renderer.render( scene, camera);
}

animate();