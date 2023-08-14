// client.js
const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://api-mainnet.magiceden.dev/v2/collections/bigheadbillions/listings', options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
