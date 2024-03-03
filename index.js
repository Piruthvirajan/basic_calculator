let expression = "";
let ansplace = document.querySelector(".ansplace");
let result;
let fixed_result;

  //Variable for OPERATORS Alone
const validOperations = ['+', '-', '*', '/', '%'];



  // Main Function  Which Takes the Input from the buttons as arguments to execute conditions for showing on Display
function valueInteraction(number) {
  
  //CONDITION FOR EQUAL SYMBOL (RESULT)
  if (number == "=") {
    result = eval(expression);

    //Checks if the Result is Integer or Not  , to Reduce it to 2 Decimal Places
    if(Number.isInteger(result)){
      fixed_result = result
    }
    else{
      fixed_result = result.toFixed(2)
    }
    
    //SHOWCASING RESULT ON DISPLAY WITH INNERHTML PROPERTY
    ansplace.innerHTML = fixed_result;
    expression = "";

    // THIS CODE TO PERFORM CALCULATION SPECIFICALLY AFTER RESULT WITHOUT REMOVING RESULT VALUE
    expression += fixed_result;
  } 
  
  //CONDITION FOR RESET BUTTON
  else if (number == "AC") {
    ansplace.innerHTML = 0;
    expression = "";
  }
  
  //CONDITION FOR DECIMAL (.)
  else if (number == ".") {

    // CONDITION IF (.) APPEARS AFTER (.) TO RETURN NOTHING
    if (number == "." && expression.charAt(expression.length -1) == '.') {
      return;
    } 

     // CONDITION IF OPERATOR APPEARS AFTER (.)  TO RETURN NOTHING
    else if(number == '.' && validOperations.includes(expression.charAt(expression.length - 1))){
      expression += "0"+ number
      ansplace.innerHTML = expression;
    }
     // CONDITION TO CARRY OUT NORMALLY (ADDING IT TO THE EXPRESSION AS STRING, SO IN FUTURE TO BE EVALUATED AS JS CODE IF '=' IS PRESSED)
    else {
      expression += number;
      ansplace.innerHTML = expression;
    }

  } 

  // CONDITION FOR OPERATORS
  else if ( validOperations.includes(number)) {

    if ((validOperations.includes(number)) && expression.charAt(expression.length - 1) == ".") {
      return;
    }
    else if((validOperations.includes(number)) && validOperations.includes(expression.charAt(expression.length - 1)) ){
      return
    }

    else {
      expression += number;
      ansplace.innerHTML = expression;
    }
  } 

  

  
  //CONDITION FOR NUMBERS...
  else {

    //CONDITION FOR NUMBERS TO ADD TO RESULT IF NEEDED TO CONTINUE CALCULATION IMMEDIATELY...
    if (expression == fixed_result && expression != "") {
      fixed_result = "";
      expression = "";

      expression += number;
      ansplace.innerHTML = expression;
      
    } 

    //NORMAL ADDING OF NO.S AS STRING TO EXPRESSION 
    else {
      expression += number;
      ansplace.innerHTML = expression;
    }
  }
}




// Add EVENT LISTENER FOR KEYPRESS EVENTS
document.addEventListener('keypress', function(event) {      // event.key stores the VALUE OF THE KEY PRESSED
  // Get the key that was pressed
  const keyPressed = event.key;

  // Find the corresponding calculator button and trigger its click event
  switch (keyPressed) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
    case '(':
    case ')':
      // 
      document.querySelector('.btn[data-value="' + keyPressed + '"]').click();
      break;
    case 'c':
    case 'C':
      // For 'C' key, trigger click event for the clear button
      document.querySelector('.btn[data-value="AC"]').click();
      break;
    case 'Enter':
    case '=':
      // For '=' and ENTER KEY, trigger click event for the '=' button
      document.querySelector('.btn[data-value="="]').click();
      break;
    
  }
});

//USAGE OF KEYDOWN TRIGGER SPECIALLY FOR BACKSPACE 
document.addEventListener('keydown', function(back){
  if (back.key == 'Backspace'){               // OBJECT.KEY VALUE IS 'Backspace'  
    if (expression == ''){
      return
    }
    else{
      expression = expression.slice(0, -1);    // TO DELETE ONE BY ONE FROM LAST ON DISPLAY
      ansplace.innerHTML = expression;
      if (expression == ''){
        
        ansplace.innerHTML = 0;               // IF DELETION LEADS TO EMPTY STRING DISPLAY 0
      }
      
    }
    
    
  }
})

function backspace(){
  if (expression == ''){
    return
  }
  else{
    expression = expression.slice(0, -1);    // TO DELETE ONE BY ONE FROM LAST ON DISPLAY
    ansplace.innerHTML = expression;
    if (expression == ''){
      
      ansplace.innerHTML = 0;               // IF DELETION LEADS TO EMPTY STRING DISPLAY 0
    }
    
  }
}