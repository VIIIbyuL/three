import * as THREE from 'three';

export function onDocumentMouseDown(event, camera, scene) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
  
    const intersects = raycaster.intersectObjects(scene.children);
  
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
  
      if (clickedObject instanceof THREE.Mesh && clickedObject.userData.star !== undefined) {
        const starNum = clickedObject.userData.star;
  
        console.log('Star clicked:', starNum);
      }
    }
};

