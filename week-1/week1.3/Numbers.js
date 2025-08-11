function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value); // Converts the value to an integer
  if (isNaN(result)) { // Checks if the result is not a number
    console.log("Value is not a number");
  } else {
    console.log("Value is a number");
  }
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value); // Converts the value to a floating-point number
  if (isNaN(result)) { // Checks if the result is not a number   
    console.log("Value is not a number");
  } else {
    console.log("Value is a number");
  }
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
