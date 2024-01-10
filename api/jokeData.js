import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);
  console.warn(jokeCall.data.setup);
  console.warn(typeof jokeCall.data.delivery);
  return jokeCall.data;
};

export default getJoke;
