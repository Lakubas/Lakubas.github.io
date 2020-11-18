// Callucate your BMI
//
// BMI=weight/height^2)
//

function bmiCalculator(weight, height) {
    let result = (weight / (height * height)).toFixed();
    return result;
}

let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
