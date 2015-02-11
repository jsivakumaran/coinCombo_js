var coinCombo = function(change) {
  var changeInteger = change*100
  var outputString = "Your change contains"
  if (changeInteger>25) {
    var quarters = Math.floor(changeInteger/25);
    changeInteger %= 25;
    outputString += " " + quarters + " quarter(s)";

  }
  if (changeInteger>10) {
    var dimes = Math.floor(changeInteger/10);
    changeInteger %= 10;
    outputString += " " +dimes + " dime(s)";
  } if (changeInteger>5) {
    var nickels = Math.floor(changeInteger/5);
    changeInteger %= 5;
    // changeInteger = changeInteger/5;
    // changeInteger = changeInteger + 5;
    // changeInteger +=5;
    outputString += " " +nickels + " nickel(s)";
  }
  var pennies = changeInteger / 1
  return outputString + " " + pennies + " pennies"
}

var coinCall = function(remainder_total, modulo_amount) {
  if (remainder_total>modulo_amount){
    var amount_of_coin = Math.floor(remainder_total/modulo_amount);
    return amount_of_coin;
  }

}
