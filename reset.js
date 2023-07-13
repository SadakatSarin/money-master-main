document.getElementById('reset-btn').addEventListener('click', function() {
    // Reset input fields
    document.getElementById('income-input').value = '';
    document.getElementById('food-input').value = '';
    document.getElementById('rent-input').value = '';
    document.getElementById('cloths-input').value = '';
    document.getElementById('save-input').value = '';
  
    // Reset result values
    setTexElementValueById('total-expenses', 0);
    setTexElementValueById('balance', 0);
    setTexElementValueById('saving-amount', 0);
    setTexElementValueById('remaining-balance', 0);
  });
  
  // Rest of the code...
  