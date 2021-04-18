let countryInput = document.querySelector('.countryInput');

countryInput.addEventListener('click', function (event) {
  event.preventDefault();
  const country = document.querySelector('.country').value;


  countryStats(country);
});

const countryStats = (country) => {
  const endpointUrl = `https://covid-19-data.p.rapidapi.com/country?name=${country}`;

  // RapidAPI host
  const rapidApiHost = 'covid-19-data.p.rapidapi.com';

  // YOUR RapidAPI key
  const rapidApiKey = '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67';

  const options = {
    headers: {
      'x-rapidapi-host': rapidApiHost,
      'x-rapidapi-key': rapidApiKey,
    },
  };

  fetch(endpointUrl, options)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};
