# Weather App

A weather application built with React.js that fetches current weather information for a city using the OpenWeather API.

## Features

- Search weather by city name.
- Display city and country.
- Show current temperature in Celsius.
- Display weather conditions and an associated icon.
- Show wind speed in metres per second.
- Display the current date.
- Show a loading indicator and an error message.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Axios
- OpenWeather API
- HTML and CSS

## How It Works

1. The user enters a city name in the search field.
2. React stores the input using the `useState` hook.
3. Pressing Enter triggers the search function.
4. Axios sends a GET request to the OpenWeather API with the city name, units and API key.
5. The API returns weather information in JSON format.
6. React updates its state and renders the weather information.

## Installation and Setup

Prerequisites: Node.js and npm.

1. Clone the repository.
2. Open the project directory in a terminal.
3. Install dependencies:

   `npm install`

4. Configure the OpenWeather API key in a local `.env` file:

   `REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY`

5. Start the application:

   `npm start`

6. Open http://localhost:3000.

## Available Commands

- `npm start` — Run the development server.
- `npm run build` — Create a production build.
- `npm test` — Run tests.

## Project Structure

- `src/App.js` — Main weather application and API logic.
- `src/App.css` — Application styling.
- `src/index.js` — React entry point.
- `public/` — HTML template and static assets.

## Security

Do not commit API keys or other secrets. The frontend API key is visible to users in the deployed application, so restrict it where possible. Use a backend proxy if stronger key protection is required.