import { addStar } from "./addStar";
import { Star } from "./Star";


export function handleSubmit(event, numArray, scene) {
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
  
    addStar(userStar, scene, numArray);
  }