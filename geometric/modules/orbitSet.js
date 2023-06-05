import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function orbitSet(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  const minDistance = 20;
  const maxDistance = 120;
  controls.minDistance = minDistance;
  controls.maxDistance = maxDistance;
}

export default orbitSet;
