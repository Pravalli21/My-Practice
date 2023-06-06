// Fill the code as per the requirements. Do not change the function name.
const deliveryDate = document.getElementById("deliveryDate");
const cakeType = document.getElementById("cakeType");
const cakeShape = document.getElementById("cakeShape");
const weight = document.getElementById("weight");
const deliveryYes = document.getElementById("deliveryYes");
const cutlery = document.getElementById("cutlery");
const resultDiv = document.getElementById("result");

function PlaceOrder(){
    try{
        // Fill the code here.
        // Retrieve the DOM input elements like deliveryDate, cakeType, cakeShape, weight, deliveryYes and cutlery using its id.
        // Check for valid deliveryDate. If invalid, then display "Invalid Delivery Date" in the div with id as "result". 
        // If deliveryDate is valid, calculate the totalCost.
        // Check for the choices opted for door delivery and cutlery. 
        // Display the appropriate result along with the totalCost as per the requirements given in description. 
        // Validate the delivery date
  if (!isValidDeliveryDate(deliveryDate.value)) {
    resultDiv.textContent = "Invalid Delivery Date";
    return;
  }

  // Calculate the total cost
  const costPerKg = 10;
  let deliveryCost = deliveryYes.checked ? 5 : 0;

  const totalCost =
    getCostOfCakeType(cakeType.value) +
    getCostOfCakeShape(cakeShape.value) +
    deliveryCost +
    weight.value * costPerKg;

  // Display the result
  let result = `Your ${weight.value} Kg ${cakeShape.value} shaped ${cakeType.value} cake`;

  if (deliveryYes.checked) {
    result += " with door delivery";
  } else {
    result += " without door delivery";
  }

  result += ` cost is $${totalCost}.`;

  if (cutlery.checked) {
    result += " Cutlery will be provided.";
  } else {
    result += " Thanks for not opting cutlery.";
  }

  resultDiv.textContent = result;
    }
    catch(e){
          document.getElementById("result").innerHTML="Function PlaceOrder: "+e;
          }
}



function getCostOfCakeType(cakeType){
    try{
        // Fill the code to return the cost based on cake type.
        // Red Velvet=6, Butterscotch=5, Chocolate Truffle=7, Black Forest=8 and White Forest=9 in Dollars.
    switch (cakeType) {
    case "Red Velvet":
      return 6;
    case "Butterscotch":
      return 5;
    case "Chocolate Truffle":
      return 7;
    case "Black Forest":
      return 8;
    case "White Forest":
      return 9;
    default:
      return 0;
  }
    
    
    
}
    catch(e){
          document.getElementById("result").innerHTML="Function getCostOfCakeType: "+e;
          }
}

function getCostOfCakeShape(cakeShape){
    try{
        // Fill the code to return the cost based on cake shape.
        // Square=2, Circle=3 and Heart=4 in Dollars.
switch (cakeShape) {
    case "Square":
      return 2;
    case "Circle":
      return 3;
    case "Heart":
      return 4;
    default:
      return 0;
  }
  const placeOrderButton = document.getElementById("placeOrderButton");
  placeOrderButton.addEventListener("click", placeOrder);
    
    
    
    }
    catch(e){
          document.getElementById("result").innerHTML="Function getCostOfCakeShape: "+e;
          }
}

function isValidDeliveryDate(deliveryDate)
{
    // Don't do any changes in this method
    try{
        var today=new Date();
        deliveryDate=new Date(deliveryDate);
   
        if(deliveryDate>today) {
            return true;
        } else {
            return false;
        }
    } catch(e) {
        document.getElementById("result").innerHTML="Function checkDeliveryDate: "+e;
    }
}
// Fill the code as per the requirements. Do not change the function name.
const deliveryDate = document.getElementById("deliveryDate");
const cakeType = document.getElementById("cakeType");
const cakeShape = document.getElementById("cakeShape");
const weight = document.getElementById("weight");
const deliveryYes = document.getElementById("deliveryYes");
const cutlery = document.getElementById("cutlery");
const resultDiv = document.getElementById("result");

function PlaceOrder(){
    try{
        // Fill the code here.
        // Retrieve the DOM input elements like deliveryDate, cakeType, cakeShape, weight, deliveryYes and cutlery using its id.
        // Check for valid deliveryDate. If invalid, then display "Invalid Delivery Date" in the div with id as "result". 
        // If deliveryDate is valid, calculate the totalCost.
        // Check for the choices opted for door delivery and cutlery. 
        // Display the appropriate result along with the totalCost as per the requirements given in description. 
        // Validate the delivery date
  if (!isValidDeliveryDate(deliveryDate.value)) {
    resultDiv.textContent = "Invalid Delivery Date";
    return;
  }

  // Calculate the total cost
  const costPerKg = 10;
  let deliveryCost = deliveryYes.checked ? 5 : 0;

  const totalCost =
    getCostOfCakeType(cakeType.value) +
    getCostOfCakeShape(cakeShape.value) +
    deliveryCost +
    weight.value * costPerKg;

  // Display the result
  let result = `Your ${weight.value} Kg ${cakeShape.value} shaped ${cakeType.value} cake`;

  if (deliveryYes.checked) {
    result += " with door delivery";
  } else {
    result += " without door delivery";
  }

  result += ` cost is $${totalCost}.`;

  if (cutlery.checked) {
    result += " Cutlery will be provided.";
  } else {
    result += " Thanks for not opting cutlery.";
  }

  resultDiv.textContent = result;
    }
    catch(e){
          document.getElementById("result").innerHTML="Function PlaceOrder: "+e;
          }
}



function getCostOfCakeType(cakeType){
    try{
        // Fill the code to return the cost based on cake type.
        // Red Velvet=6, Butterscotch=5, Chocolate Truffle=7, Black Forest=8 and White Forest=9 in Dollars.
    switch (cakeType) {
    case "Red Velvet":
      return 6;
    case "Butterscotch":
      return 5;
    case "Chocolate Truffle":
      return 7;
    case "Black Forest":
      return 8;
    case "White Forest":
      return 9;
    default:
      return 0;
  }
    
    
    
}
    catch(e){
          document.getElementById("result").innerHTML="Function getCostOfCakeType: "+e;
          }
}

function getCostOfCakeShape(cakeShape){
    try{
        // Fill the code to return the cost based on cake shape.
        // Square=2, Circle=3 and Heart=4 in Dollars.
switch (cakeShape) {
    case "Square":
      return 2;
    case "Circle":
      return 3;
    case "Heart":
      return 4;
    default:
      return 0;
  }
  const placeOrderButton = document.getElementById("placeOrderButton");
  placeOrderButton.addEventListener("click", placeOrder);
    
    
    
    }
    catch(e){
          document.getElementById("result").innerHTML="Function getCostOfCakeShape: "+e;
          }
}

function isValidDeliveryDate(deliveryDate)
{
    // Don't do any changes in this method
    try{
        var today=new Date();
        deliveryDate=new Date(deliveryDate);
   
        if(deliveryDate>today) {
            return true;
        } else {
            return false;
        }
    } catch(e) {
        document.getElementById("result").innerHTML="Function checkDeliveryDate: "+e;
    }
}
