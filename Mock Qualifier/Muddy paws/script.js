//Don't change or delete the try/catch block

function calculateCost(){
    try {
        var password = document.getElementById("password").value;
        var name = document.getElementById("name").value;
        var breed = document.getElementById("breed").value;
        var count = parseInt(document.getElementById("count").value);
  
        var resultDiv = document.getElementById("result");
         // Step 1: Invoke checkPassword() function
  var isPasswordValid = checkPassword(password);
  
  if (!isPasswordValid) {
    resultDiv.innerHTML = "Password doesn't match the required pattern";
    return;
  }
  
  // Step 2: Calculate total cost using getTotalAmount() function
  var totalAmount = getTotalAmount(count, breed);
  
  // Display the output in the result div
  var output = "Hi " + name + ", the total amount to be paid for the breed " + breed + " is $" + totalAmount + ".";
  resultDiv.innerHTML = output;
}

  
        
        //Fetch the needed DOM values 
        
        //Invoke checkPassword(pwd) , if true then invoke getTotalAmount(count,breed) and dsiplay the output as per description
        //if false, display the correct message as given in description
        

    catch(err){
        document.getElementById("result").innerHTML="Function calculateCost: "+err;
    }
    return false;
}

function checkPassword(password) {
	try {
        	    
        	// Fill your code here to check whether the password pattern satisfies the requirements
        	//password should be of minimum 6 characters having atleast 1 small letter(a-z),1 capital letter(A-Z) and 1 digit(0-9)
            // HINT :use RegExp to match the pattern, if matches with pattern return true, else false.
            
  // Define the regular expression pattern for password validation
  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  
  // Check if the password matches the pattern
  return pattern.test(pwd);

             
        		
	} catch(err) {
		document.getElementById("result").innerHTML="Function checkPassword: "+err;
	}
}

function getTotalAmount(count,breed) {
    try{
    
   // Return the total cost after applying 20% discount on total amount based on breed selection and total number of puppies passed as arguments
   // refer description for cost per puppy for breed types
// Define the cost per breed
  var costPerBreed = {
    "German Shepherd": 1500,
    "Havanese": 1000,
    "Golden Retriever": 900,
    "Siberian Husky": 2000,
    "Maltese": 1200
  };
  
  // Calculate the total cost without discount
  var totalCost = count * costPerBreed[breed];
  
  // Apply 20% discount
  var discountedCost = totalCost - (totalCost * 0.20);
  
  return discountedCost;
      }
      catch(err){
           document.getElementById("result").innerHTML="Function getTotalAmount: "+err;
          }
}
         
       