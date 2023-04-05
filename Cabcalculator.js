window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defValues = { 
    amount: 10000,
    years: 10,
    rate: 6.09
  };
  
    const uiAmount = document.getElementById("loan-amount");
    uiAmount.value = defValues.amount;
    const uiYears = document.getElementById("loan-years");
    uiYears.value = defValues.years;
    const uiRate = document.getElementById("loan-rate");
    uiRate.value = defValues.rate;
    calculateMonthlyPayment(defValues);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const uiPay = getCurrentUIValues();
  if(getCurrentUIValues(uiPay)) {
    const uiPayment = calculateMonthlyPayment(uiPay);
    updateMonthly(uiPayment);
  } else {
    return alert('Oops. You entered invalid data!');
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const term = values.years;
  const apr = (values.rate) * 0.01;
  const i = apr / 12;
  const n = term * 12;
  
  const calculation = (P * i) / (1 - ((1 + i)**(-n)));
  const monthly = '$' + (Math.round(calculation *100) / 100).toFixed(2);  

  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('h3').innerHTML = '';
  const monthlyPay = document.createElement('p');
  monthlyPay.innerText = `Monthly Payment ${monthly}`;
  const h3 = document.querySelector('h3');
  h3.appendChild(monthlyPay);
}

function checkObject(uiValues) {
  for(var property in uiValues) {
    const value = uiValues[property];
    if(!isNaN(value) && value >= 0) {
      return true
    } else {
      return false;
    }
  }
}
