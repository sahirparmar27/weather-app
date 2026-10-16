// Header.js
// import Header from "./Header";
// function App()
// {
//   return(
//     <div>
//       <Header/>
//     </div>
//   );
// }

// export default App;



// SimpleForm.js
// import React from 'react';
// import FormComponent from './SimpleForm';

// const App = () => {
//   return (
//     <div>
//       <FormComponent />
//     </div>
//   );
// };

// export default App;

//Userlist
// import React from 'react';
// import UserList from './UserList';

// function App() {
//   return (
//     <div>
//       <UserList />
//     </div>
//   );
// }

// export default App;



// Login Page for NSM & ETT
// import React from 'react';
// import './style.css';
// import Login from './Login';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }


// export default App;

// MountingMethods.js
// import MountingMethods from './MountingMethods'; 
// function App()
// { 
//   return ( 
//   <div className="App"> 
//     <MountingMethods></MountingMethods> 
//   </div> ); 
// } 
  
// export default App;

// CounterExample.js
// import CounterExample from './CounterExample';
// function App()
// {
//   return(
//     <>
//       <CounterExample></CounterExample>
//     </>
//   );
// }

// export default App;




// Weather App
// Importing required components and libraries
import { Oval } from 'react-loader-spinner'; // Importing Oval loader from react-loader-spinner
import React, { useState } from 'react'; // Importing React and useState hook
import axios from 'axios'; // Importing axios for making API requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon
import { faFrown } from '@fortawesome/free-solid-svg-icons'; // Importing faFrown icon
import './App.css'; // Importing App.css file

// Defining the GfGWeatherApp function component
function GfGWeatherApp() {
  // Using useState hook to store input value and weather data
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false, // Initial loading state
    data: {}, // Initial weather data
    error: false, // Initial error state
  });

  // Defining a function to format the current date
  const toDateFunction = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const WeekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    return date;
  };

  // Defining a function to handle search input
  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput(''); // Clearing input field
      setWeather({ ...weather, loading: true }); // Setting loading state to true
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
      await axios
        .get(url, {
          params: {
            q: input, // Passing input value as query parameter
            units: 'metric', // Setting units to metric
            appid: api_key, // Passing API key
          },
        })
        .then((res) => {
          console.log('res', res);
          setWeather({ data: res.data, loading: false, error: false }); // Updating weather data and setting loading state to false
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true }); // Updating error state
          setInput(''); // Clearing input field
          console.log('error', error);
        });
    }
  };

  // Returning the JSX elements
  return (
    <div className="App">
      <h1 className="app-name">Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Enter City Name.."
          name="query"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.loading && (
        <>
          <br />
          <br />
          <Oval type="Oval" color="black" height={100} width={100} />
        </>
      )}
      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} />
            <span style={{ fontSize: '20px' }}>City not found</span>
          </span>
        </>
      )}
      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{toDateFunction()}</span>
          </div>
          <div className="icon-temp">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>
          <div className="des-wind">
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GfGWeatherApp;