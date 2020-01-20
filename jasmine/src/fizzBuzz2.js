function FizzBuzz2(){
}

FizzBuzz2.prototype.play = function(number) {
  var string = "";
  if (this._isDivisibleBy(3, number)) {
    string += "fizz";
  };
  if (this._isDivisibleBy(5, number)) {
    string += "buzz";
  };
  if (string == "") {
    return number;
  };
  return string;
}

FizzBuzz2.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
