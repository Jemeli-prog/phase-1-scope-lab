// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
    console.log(bestCustomer);
 

}
function overwriteBestCustomer() {
      bestCustomer = "maybe bob";

}

const leastFavoriteCustomer = "Eva";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Gerry";

}
/*  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });*/