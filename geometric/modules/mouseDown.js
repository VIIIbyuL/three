import * as THREE from "three";

function onDocumentMouseDown(event, camera, scene, raycaster) {
  const formElement = document.getElementById("form");
  const rect = formElement.getBoundingClientRect();
  const width = window.innerWidth - rect.right;

  const value = rect.right - rect.left;
  const mouse = new THREE.Vector2();
  mouse.x = ((event.clientX - rect.left - value) / width) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;

    if (
      clickedObject instanceof THREE.Mesh &&
      clickedObject.userData.star !== undefined
    ) {
      const starNum = clickedObject.userData.star;

      // eslint-disable-next-line no-console
      console.log("Star clicked:", starNum);
    }
  }
}

export default onDocumentMouseDown;
