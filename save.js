document.getElementById('save-btn1').addEventListener('click', function () {
    const totalExpenses = getInputFieldTextById('total-expenses');
    const saveInput = getInputFieldValueById('save-input');
    const balance = getInputFieldTextById('balance');
    const previousSavingAmount = getInputFieldTextById('saving-amount');
    const previousRemainingBalance = getInputFieldTextById('remaining-balance');
  
    const percentageSave = totalExpenses * (saveInput / 100);
    const newSavingAmount = previousSavingAmount + percentageSave;


    if (newSavingAmount < 0) {
        
        setTexElementValueById('saving-amount','invalid amount of');
  

    } else {
        
        setTexElementValueById('saving-amount', newSavingAmount);
  

    }

  


    const newRemainingBalance = balance + newSavingAmount;

    if (newRemainingBalance<0) {
        
        setTexElementValueById('remaining-balance', 'invalid amount of');
    } else {
        
        setTexElementValueById('remaining-balance', newRemainingBalance);
    }
   
  

  });
  


  
    