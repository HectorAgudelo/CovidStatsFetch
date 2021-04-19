let countryInput = document.querySelector('.countryInput');

countryInput.addEventListener('click', function (event) {
  event.preventDefault();
  const countries = document.querySelector('.country').value;

  countryStats(countries);
});

const countryStats = (countries) => {
  const endpointUrl = `https://covid-19-data.p.rapidapi.com/country?name=${countries}`;

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
      countryResults(body)
    })
    .catch((err) => {
      console.log(err);
    });
};

const countryResults = (body)=>{
    let { confirmed, country, critical, deaths, recovered } = body[0];
    let resultsBody = 
`<table class="table table-success table-striped">
<thead>
  
    <h1 class="text">${country}</h1>
  
</thead>
<tbody>
  <tr>
    <th class="text" scope="row">Confirmed</th>
    <td class="text" colspan="">${confirmed.toLocaleString()}</td>
  </tr>
  <tr>
    <th class="text" scope="row">Critical</th>
    <td class="text" colspan="2">${critical.toLocaleString()}</td>
  </tr>
  <tr>
    <th class="text" scope="row">Deaths</th>
    <td class="text" colspan="2">${deaths.toLocaleString()}</td>
  </tr>
  <tr>
  <th class="text" scope="row">Recovered</th>
  <td class="text" colspan="2">${recovered.toLocaleString()}</td>
  </tr>
</tbody>
</table>
<div class="btn">
<a href="/index.html" class="btn btn-success">Home</a>
</div>`;
document.querySelector("body").innerHTML = ""
let div = document.createElement("DIV")
div.innerHTML=resultsBody
document.querySelector("body").appendChild(div);

}