fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryWithUSD = data.find(country => country.currencies.USD);
    console.log('Country with USD as currency:', countryWithUSD.name.common);
  })
  .catch(error => {
    console.log('Error:', error);
  });
