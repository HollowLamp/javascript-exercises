const findTheOldest = function (arr) {
  const curr = new Date().getFullYear();
  return arr.reduce((person, now) => {
    const pAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : curr - person.yearOfBirth;
    const nAge = now.yearOfDeath ? now.yearOfDeath - now.yearOfBirth : curr - now.yearOfBirth;
    return pAge > nAge ? person : now;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
