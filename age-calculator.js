function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}


console.log(ageCalculator("suzie", 1984, 2016));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Jaime", 1989, 2020));
//"Suzie is 32 years old." desired output