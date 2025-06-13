// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers
// query - string matching against
// case sentive - tolowercase touppercase
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toUpperCase() === query.toUpperCase());
}
console.log(findMatching(drivers, "Sarah"));


//  This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toUpperCase().startsWith(query.toUpperCase())
  );
}
console.log(fuzzyMatch(drivers, "Bo"));

// This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown.
function matchName(drivers1, name) {
  return drivers1.filter(driver => driver.name === name);
}
const drivers1 = [
    {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
];
console.log(matchName(drivers1, "Sammy"));
