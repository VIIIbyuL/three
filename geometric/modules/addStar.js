import { starDisplay } from "./star-display";
import * as THREE from 'three';

export function addStar(userStar, scene, numArray) {
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 1, // Adjust the intensity as desired
    });
    const star = new THREE.Mesh(geometry, material);
    // var star;
  
    // loader.load('./Star.FBX', function (object) {
    //   star = object;
    // });
  
  
    star.userData.star = userStar;
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    star.position.set(x, y, z);
    console.log(`star is ${userStar.objective} and ${star.userData.star}`);
  
  
    scene.add(star);
    starDisplay(numArray);
  }