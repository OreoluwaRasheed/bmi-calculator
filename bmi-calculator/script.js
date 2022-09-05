function calculateBMI() {
  let heightFeet = document.getElementById("height-feet").value;
  let heightInches = document.getElementById("height-inches").value;

  let height = heightFeet * 0.3048 + heightInches * 0.0254;

  let weight = document.getElementById("weight-kg").value;

  let BMI = (weight / (height * height)).toFixed(4);

  document.getElementById("result").innerHTML = "BMI RESULT IS " + BMI;
}
