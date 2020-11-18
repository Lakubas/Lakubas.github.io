bmiCalculator = (weight, height) => {
    let bmiScore = (weight / (height * height)).toFixed();

    if (bmiScore < 18.5) {
        return "Your BMI is " + bmiScore + ", so you are underweight.";
    } else if (bmiScore > 24.9) {
        return "Your BMI is " + bmiScore + ", so you are overweight.";
    } else {
        return "Your BMI is " + bmiScore + ", so you have a normal weight.";
    }
}

console.log(bmiCalculator(10, 1.82));
