fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);
    console.log(countriesWithLessPopulation);
  })
  .catch(error => {
    console.log('Error:', error);
  });
