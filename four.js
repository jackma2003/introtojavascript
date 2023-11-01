function processAndDisplayResult(input) {
    if (typeof input === "number") {
      // If the input is a number
      console.log("Input is a number: " + input);
    } 
    else if (typeof input === "string") {
      // If the input is a string
      console.log("Input is a string: " + input);
    } 
    else if (typeof input === "boolean") {
      // If the input is a boolean
      console.log("Input is a boolean: " + input);
    } 
    else {
      // For any other data type, display an error message
      console.log("Error: Unsupported data type.");
    }
  }

// Test cases
processAndDisplayResult(42);      
processAndDisplayResult("Hello");     
processAndDisplayResult(true);      
processAndDisplayResult([1, 2, 3]); // display unsupported data type