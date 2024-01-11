import fetch from 'node-fetch';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function yourCity() {
  let city = await prompt('Geben Sie Ihren Wohnort ein : ');
  return city;
}

async function getWeatherData(city) {
  const apiKey = '79ba661e872d7aa10ce82d8635779ace';
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log('Error fetching weather data:', error);
    throw error;
  }
}

async function main() {
  const city = await yourCity();

  try {
    const weatherData = await getWeatherData(city);
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}

main();
