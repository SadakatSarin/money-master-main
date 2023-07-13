function getInputFieldValueById(inputById) {
    const inputField = document.getElementById(inputById);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    // inputField.value = '';

    
    return inputValue;
  }
  
  function getInputFieldTextById(inputByText) {
    const inputTextString = document.getElementById(inputByText).innerText;
    const inputText = parseFloat(inputTextString);
    return inputText;
  }
  

  function setTexElementValueById(elementId,value) {

    const totalExpenses = document.getElementById(elementId);
    totalExpenses.innerText = value;

}

