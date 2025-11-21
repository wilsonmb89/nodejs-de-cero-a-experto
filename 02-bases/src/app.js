// require("./js-foundation/02-destructuring");
/* const { buildMakePerson } = require("./js-foundation/05-factory");
const { getUUID, getAge } = require("./plugins"); */
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { emailTemplate } = require("./js-foundation/01-template");
const getPokemonById = require("./js-foundation/06-promises");

// console.log(emailTemplate);

/* getUserById(1, (error, user) => {
  if (error) {
    throw error;
  }

  // console.log({ user });
});
 */

/* const obj = {
  name: "Wilson",
  birthdate: "1989-09-30",
};
const makePerson = buildMakePerson({ getUUID, getAge });
const person = makePerson(obj);
console.log({ person }); */

getPokemonById(1)
  .then((data) => {
    const { name } = data;
    console.log({ name });
  })
  .catch((error) => console.log({ error }));
