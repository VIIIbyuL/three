import * as THREE from 'three';

export function onDocumentMouseDown(event, camera, scene, raycaster) {
    const canvas = document.querySelector('#bg');
    const formElement = document.getElementById("form");
    const rect = formElement.getBoundingClientRect();
    const width = window.innerWidth - rect.right;
    
    let value = (rect.right - rect.left);
    const mouse = new THREE.Vector2();
    mouse.x = ((event.clientX - rect.left - value) / width) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    console.log('Star clickeqweqeqwed:');
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

