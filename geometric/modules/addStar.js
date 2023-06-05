import * as THREE from "three";
import starDisplay from "./star-display";

function addStar(userStar, scene, numArray) {
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 1, // Adjust the intensity as desired
  });
  const star = new THREE.Mesh(geometry, material);

  star.userData.star = userStar;

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
  starDisplay(numArray);
}

export default addStar;
