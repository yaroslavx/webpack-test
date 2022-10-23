import axios from 'axios';

const getSomeMmm = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios
    .get('https://icanhazdadjoke.com/', config)
    .then(
      (res) => (document.querySelector('#cuteJoke').innerHTML = res.data.joke)
    );

  return 'Mmm, u are cute';
};

export default getSomeMmm;
