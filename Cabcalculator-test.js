
it('should calculate the monthly rate correctly', function () {
  const home = {
    amount: 100000,
    years: 30,
    rate: 8
  }
  expect(calculateMonthlyPayment(home)).toEqual('$733.76');
  
  const car = {
    amount: 25000,
    years: 5,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(car)).toEqual('$466.08');
});


// it("should return a result with 2 decimal places", function() {
//   // ..
// });

// /// etc
