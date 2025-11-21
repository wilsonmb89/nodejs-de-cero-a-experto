const { httpCientPlugin } = require("../plugins");

/* const getPokemonById = (id) => {
  return new Promise((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
      .then((fetchData) => fetchData.json())
      .then((jsonData) => resolve(jsonData))
      .catch((error) => reject(error));
  });
}; */

/* const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url).then((fetchData) => fetchData.json());
}; */

/* const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const fetchResponse = await fetch(url);
  const jsonResponse = await fetchResponse.json();

  return jsonResponse;
}; */

/* const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await httpCientPlugin(url);

  return response;
}; */

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data } = await httpCientPlugin.get(url);

  return data;
};

module.exports = getPokemonById;
