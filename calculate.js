
  document.getElementById('btn1').addEventListener('click', function () {
    const getIncomeInputValue = getInputFieldValueById('income-input');
    const getFoodInputValue = getInputFieldValueById('food-input');
    const getRentInputValue = getInputFieldValueById('rent-input');
    const getClothInputValue = getInputFieldValueById('cloths-input');
      const previousTotalExpenses = getInputFieldTextById('total-expenses');
     const previousBalance = getInputFieldTextById('balance');


    const totalExpenses = getFoodInputValue + getRentInputValue + getClothInputValue;
    const newTotalExpenses = previousTotalExpenses + totalExpenses;

    const currentBalance = getIncomeInputValue - newTotalExpenses;

    if (newTotalExpenses < 0) {
      
      setTexElementValueById('total-expenses', 'invalid amount of' );

      
    } else {
      
      setTexElementValueById('total-expenses', newTotalExpenses );

    }

    if (currentBalance < 0) {
      
      setTexElementValueById('balance','invalid amount of' );

      
    } else {
      
      setTexElementValueById('balance',currentBalance );

    }


    
  

      
  });



  
  
  
  
  
  