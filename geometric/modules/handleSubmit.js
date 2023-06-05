import addStar from "./addStar";
import Star from "./Star";

function handleSubmit(event, numArray, scene) {
  event.preventDefault();
  const objectiveInput = document.getElementById("obj");
  const objectiveInfoInput = document.getElementById("desc");

  const objective = objectiveInput.value;
  const objectiveInfo = objectiveInfoInput.value;
  const objectiveNum = numArray.length + 1;

  if (objective === "" || objectiveInfo === "") {
    return;
  }

  const userStar = new Star(objective, objectiveInfo, objectiveNum);
  numArray.push(userStar);

  addStar(userStar, scene, numArray);
}

export default handleSubmit;
