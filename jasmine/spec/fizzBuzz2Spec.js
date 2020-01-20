describe("FizzBuzz2", function (){
  var fizzBuzz2;

  beforeEach(function(){
    fizzBuzz2 = new FizzBuzz2();
  });

  it('should returns fizz when passed 3', function(){
    expect(fizzBuzz2.play(3)).toEqual("fizz");
  });

  it('should returns buzz when passed 5', function(){
    expect(fizzBuzz2.play(5)).toEqual("buzz");
  });

  it('should returns fizzbuzz when passed 15', function(){
    expect(fizzBuzz2.play(15)).toEqual("fizzbuzz");
  });

  it('should returns number when passed 4', function(){
    expect(fizzBuzz2.play(4)).toEqual(4);
  });

});