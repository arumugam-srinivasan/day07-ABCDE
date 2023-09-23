fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital[0]);
      console.log('Flag:', country.flags.png);
      console.log('---------------------');
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
