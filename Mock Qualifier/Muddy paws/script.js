// Function to validate the password pattern
function checkPassword(pwd) {
  // Password pattern: minimum 6 characters, at least one capital letter, one small letter, and one digit
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(pwd);
}

// Function to calculate the total cost
function getTotalAmount(count, breed) {
  let costPerPuppy = 0;
  
  switch (breed) {
    case 'German Shepherd':
      costPerPuppy = 1500;
      break;
    case 'Havanese':
      costPerPuppy = 1000;
      break;
    case 'Golden Retriever':
      costPerPuppy = 900;
      break;
    case 'Siberian Husky':
      costPerPuppy = 2000;
      break;
    case 'Maltese':
      costPerPuppy = 1200;
      break;
    default:
      return 0;
  }
  
  // Calculate the total cost by multiplying the count and cost per puppy
  let totalCost = count * costPerPuppy;
  
  // Apply 20% discount
  totalCost -= totalCost * 0.2;
  
  return totalCost;
}

// Function to handle the form submission
function calculateCost() {
  // Get the form elements
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const count = document.getElementById('count').value;
  const breed = document.getElementById('breed').value;
  const resultDiv = document.getElementById('result');
  
  // Validate the password
  const passwordValid = checkPassword(password);
  
  if (!passwordValid) {
    resultDiv.innerHTML = 'Password doesn\'t match the required pattern';
  } else {
    // Calculate the total cost
    const totalAmount = getTotalAmount(count, breed);
    
    // Create the output message
    const message = `Hi ${name}, the total amount to be paid for the breed ${breed} is $${totalAmount}.`;
    
    // Display the output message
    resultDiv.innerHTML = message;
  }
}

// Add event listener to the form submission
document.getElementById('submit').addEventListener('click', calculateCost);
