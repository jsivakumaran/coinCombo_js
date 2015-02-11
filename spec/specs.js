describe('coinCombo', function() {

  it("is check the amount given for how pennies it contains", function() {
    expect(coinCombo(.04)).to.equal("Your change contains 4 pennies");
  });

  it("adds functionality for nickels", function() {
    expect(coinCombo(.09)).to.equal("Your change contains 1 nickel(s) 4 pennies");
  });

  it("add functionality for dimes", function(){
    expect(coinCombo(.19)).to.equal("Your change contains 1 dime(s) 1 nickel(s) 4 pennies");
  });

  it ("add functionality for quarters", function(){
    expect(coinCombo(.33)).to.equal("Your change contains 1 quarter(s) 1 nickel(s) 3 pennies");
  });

  it ("adds functionality to give multiple combos for 75 cents", function(){
    expect(coinCombo(.75)).to.equal("Your change contains 75 pennies");
  });
});
