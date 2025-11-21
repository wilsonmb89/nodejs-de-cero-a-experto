const users = [
  {
    id: 1,
    name: "Jhon Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const getUserById = (userId, callback) => {
  const user = users.find(({ id }) => id === userId);
  const error = user ? null : new Error(`USUARIO ${userId} NO ENCONTRADO`);

  callback(error, user);
};

module.exports = { getUserById };
