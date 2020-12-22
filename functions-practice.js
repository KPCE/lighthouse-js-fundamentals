// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}
sayHello()
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);
console.log(avg)

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}