# 🌦️ SkyCast — Weather App

A modern, responsive weather application built with React.js and the OpenWeather API. Search for a city to view current weather conditions through a clean and intuitive dashboard.

<p align="center">
  <a href="https://weather-r70z5iymb-sahirparmar27.vercel.app/">
    <strong>🌐 View Live Demo</strong>
  </a>
  &nbsp; | &nbsp;
  <a href="https://github.com/sahirparmar27/weather-app">
    <strong>💻 View Source Code</strong>
  </a>
</p>

---

## ✨ Features

- 🌍 **City-Based Search:** Search for weather information by city name.
- 🌡️ **Current Temperature:** View the current temperature in Celsius.
- 💧 **Relative Humidity:** Check the humidity percentage.
- 🌤️ **Feels-Like Temperature:** View the apparent temperature.
- 🌬️ **Barometric Pressure:** View atmospheric pressure in hPa.
- ☁️ **Weather Conditions:** View the current weather description.
- ⚡ **Loading and Error Handling:** Display feedback while fetching weather data and when a search fails.
- 📱 **Responsive UI:** Access the application on different screen sizes.
- 🚀 **Live Deployment:** Hosted on Vercel with GitHub integration.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend application |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| Axios | HTTP requests |
| OpenWeather API | Current weather data |
| Git and GitHub | Version control and source code hosting |
| Vercel | Deployment and hosting |

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js and npm installed
- An OpenWeather API key

### 1. Clone the repository

```bash
git clone https://github.com/sahirparmar27/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a `.env` file in the project's root directory and add:

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your own API key from [OpenWeather](https://home.openweathermap.org/api_keys).

### 4. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 API Integration

SkyCast uses the OpenWeather Current Weather API to retrieve weather information for searched cities.

The application requests weather data in metric units, displaying temperature in Celsius and atmospheric pressure in hPa.

## 🔐 API Key Configuration

- Keep your local `.env` file excluded from Git using `.gitignore`.
- Never commit your actual API key to the repository.
- React environment variables prefixed with `REACT_APP_` are included in the client-side JavaScript bundle and are not secret.
- Restrict your API key where supported and monitor your OpenWeather account usage.

## 📂 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above is representative. Your actual project may contain additional files.*

## 🎯 Project Objective

The goal of this project is to build a user-friendly weather application that retrieves current weather information from an external API and presents it through a modern, responsive interface.

## 📚 Key Learnings

- Integrating REST APIs into a React application
- Handling asynchronous HTTP requests using Axios
- Managing loading states and API errors
- Configuring environment variables
- Designing responsive user interfaces
- Using Git and GitHub for version control
- Deploying a frontend application with Vercel

## 👨‍💻 Author

**Sahir Parmar**

B.Tech Artificial Intelligence Student

- **GitHub:** [sahirparmar27](https://github.com/sahirparmar27)
- **Project Repository:** [weather-app](https://github.com/sahirparmar27/weather-app)
- **Live Application:** [SkyCast Weather App](https://weather-r70z5iymb-sahirparmar27.vercel.app/)

---

If you find this project useful, consider giving the repository a ⭐.