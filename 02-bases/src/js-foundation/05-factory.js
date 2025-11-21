// const { getUUID, getAge } = require("../plugins");

const buildMakePerson = ({ getUUID, getAge }) => {
  if (!getUUID || !getAge) {
    return new Error('Dependencies are required');
  }

  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

/* const buildPerson = ({ name, birthdate }, getUUID, getAge) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
}; */

/* const obj = {
  name: "Wilson",
  birthdate: "1989-09-30",
};
const person = buildPerson(obj);
console.log({ person }); */

module.exports = {
  buildMakePerson,
};
