const form = document.getElementById("hearing-form");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  // get input values
  const right500 = parseFloat(document.getElementById("right-500hz").value);
  const left500 = parseFloat(document.getElementById("left-500hz").value);
  const right1000 = parseFloat(document.getElementById("right-1000hz").value);
  const left1000 = parseFloat(document.getElementById("left-1000hz").value);
  const right2000 = parseFloat(document.getElementById("right-2000hz").value);
  const left2000 = parseFloat(document.getElementById("left-2000hz").value);
  const right4000 = parseFloat(document.getElementById("right-4000hz").value);
  const left4000 = parseFloat(document.getElementById("left-4000hz").value);

  // calculate average hearing thresholds for each ear
  const rightAvg = (right500 + right1000 + right2000 + right4000) / 4;
  const leftAvg = (left500 + left1000 + left2000 + left4000) / 4;

  // calculate hearing loss for each ear
  const rightLossRatio = (rightAvg - 25) * 0.015;
  const leftLossRatio = (leftAvg - 25) * 0.015;

  // calculate total hearing loss
  const totalLossRatio =
    (Math.max(rightLossRatio, leftLossRatio) * 5 +
      Math.min(rightLossRatio, leftLossRatio) * 1) /
    6;

  // calculate handicap percentage
  // let handicap = 0;

  // if (totalLoss <= 20) {
  //   handicap = 0;
  // } else if (totalLoss >= 70) {
  //   handicap = 100;
  // } else {
  //   handicap = (totalLoss - 20) * 1.25;
  // }

  // check if handicap percentage is greater than 40%
  const hhGreaterThan45 = totalLossRatio >= 0.45 ? "Yes" : "No";

  // display results
  results.innerHTML = `Your total hearing loss is ${
    totalLossRatio * 100
  } %.<br> 
  Is your hearing handicap greater than 45%? ${hhGreaterThan45}`;
});
