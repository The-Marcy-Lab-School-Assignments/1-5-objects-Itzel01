const coolGreeting = (person) => {
  return person.isCool ? `What is UP ${person.name.toUpperCase()}? How you been doin'?` : `Greetings ${person.name}, how have you been lately?`
};

const haveBirthday = (person) => {
  person.age++
};

const becomeSecretAgent = (person,spyHandle) => {
  delete person.name
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  return {
    name,
    maker,
    year, 
    needsOilChange : false
  }
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  person.hobbies.forEach(hobby => {
    console.log(`${person.name} likes ${hobby}.`);
  });
};

const getNextOpponent = (team) => {
  return team.matches.length === 0 ? null : team.matches[0].teamName
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (users) => {
  if(users.length === 0) return []
  const matrix = [Object.keys(users[0])];
  users.forEach(user => {
    matrix.push(Object.values(user));
  })
  return matrix;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
