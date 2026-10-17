import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function formatDate() {
  return new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "long" }).format(new Date());
}

export default function GfGWeatherApp() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({ loading: false, data: null, error: "" });

  const search = async (event) => {
    event?.preventDefault();
    const city = input.trim();
    if (!city || weather.loading) return;
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    if (!apiKey) {
      setWeather({ loading: false, data: null, error: "API key is missing. Check your local .env file." });
      return;
    }
    setWeather({ loading: true, data: null, error: "" });
    try {
      const response = await axios.get(API_URL, { params: { q: city, units: "metric", appid: apiKey } });
      setWeather({ loading: false, data: response.data, error: "" });
      setInput("");
    } catch (err) {
      const message = err?.response?.status === 404
        ? "We couldn't find that city. Check the spelling and try again."
        : err?.response?.status === 401
        ? "The weather API key was rejected. Check your OpenWeather API key."
        : "Unable to fetch weather right now. Check your connection and try again.";
      setWeather({ loading: false, data: null, error: message });
    }
  };

  const data = weather.data;
  const current = data?.main;
  const condition = data?.weather?.[0];
  const iconUrl = condition?.icon ? `https://openweathermap.org/img/wn/${condition.icon}@2x.png` : "";

  return (
    <main className="weather-app">
      <header className="topbar">
        <a className="brand" href="/" aria-label="SkyCast home" onClick={(e) => { e.preventDefault(); setWeather({ loading: false, data: null, error: "" }); setInput(""); }}>
          <span className="brand-mark">☁</span>
          <span className="brand-copy"><strong>SkyCast</strong><small>WEATHER PULSE</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <span className="nav-active">Overview</span>
        </nav>
        <span className="topbar-status"><span className="status-dot" /> LIVE WEATHER</span>
      </header>

      {!data && !weather.loading && !weather.error && (
        <section className="welcome-layout">
          <div className="welcome-card">
            <div className="hero-weather-icon"><span>☀️</span><small>LIVE</small></div>
            <span className="eyebrow">REAL-TIME WEATHER DATA</span>
            <h1>Live Weather Forecast</h1>
            <p className="hero-description">Enter a city to discover its weather, current conditions,<br className="desktop-break" /> and local atmospheric details.</p>
            <form className="search-form" onSubmit={search}>
              <label className="sr-only" htmlFor="city-search">Search city</label>
              <span className="search-symbol" aria-hidden="true">⌕</span>
              <input id="city-search" type="text" placeholder="Search city (e.g., Ahmedabad, London...)" value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" />
              <button type="submit" disabled={!input.trim()}>Check weather <span aria-hidden="true">➜</span></button>
            </form>
            <div className="popular-cities">
              <span>POPULAR CITIES</span>
              {["Ahmedabad", "Mumbai", "Jaipur", "Delhi", "London"].map((city) => <button key={city} type="button" onClick={() => setInput(city)}>{city}</button>)}
            </div>
          </div>
          <div className="feature-grid">
            <article className="feature-card"><span className="feature-icon">◉</span><small>HIGH PRECISION</small><h2>Accurate Real-Time Data</h2><p>Current conditions delivered from live weather observations.</p></article>
            <article className="feature-card"><span className="feature-icon">◈</span><small>GLOBAL COVERAGE</small><h2>Worldwide Cities</h2><p>Search cities around the world and view their latest conditions.</p></article>
            <article className="feature-card"><span className="feature-icon">▣</span><small>ATMOSPHERIC DATA</small><h2>Detailed Metrics</h2><p>Explore temperature, humidity, pressure and wind speed.</p></article>
          </div>
          <div className="welcome-note"><span>ⓘ</span> Ready when you are. Search a city above to get started.</div>
        </section>
      )}

      {weather.loading && <section className="message-panel" aria-live="polite"><Oval color="#0877a8" height={58} width={58} /><h2>Fetching live weather...</h2><p>Getting the latest conditions for {input || "your city"}.</p></section>}

      {weather.error && !weather.loading && (
        <section className="message-panel error-panel" role="alert">
          <FontAwesomeIcon icon={faFrown} /><h2>We couldn't load that weather</h2><p>{weather.error}</p>
          <form className="search-form compact-search" onSubmit={search}>
            <label className="sr-only" htmlFor="city-search-error">Search city</label>
            <input id="city-search-error" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Try another city..." />
            <button type="submit" disabled={!input.trim()}>Try again</button>
          </form>
        </section>
      )}

      {data && current && condition && (
        <section className="dashboard">
          <form className="search-form result-search" onSubmit={search}>
            <label className="sr-only" htmlFor="city-search-result">Search another city</label>
            <input id="city-search-result" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Search another city..." />
            <button type="submit" disabled={!input.trim()}>Search <span aria-hidden="true">➜</span></button>
          </form>
          <div className="dashboard-heading">
            <div><span className="eyebrow">CURRENT CONDITIONS</span><h1>{data.name}, <span>{data.sys?.country}</span></h1><p>{formatDate()}</p></div>
            <span className="live-pill"><span className="status-dot" /> LIVE OBSERVATION</span>
          </div>
          <div className="dashboard-grid">
            <article className="temperature-card">
              <div className="temperature-top"><span>NOW IN {data.name.toUpperCase()}</span><span className="unit-pill">°C</span></div>
              <div className="temperature-main">{iconUrl && <img src={iconUrl} alt={condition.description || "Weather icon"} />}<div className="temperature-value">{Math.round(current.temp)}<span>°C</span></div></div>
              <div className="condition-label">{condition.description}</div>
              <div className="temperature-details"><span>Feels like<b>{Math.round(current.feels_like ?? current.temp)}°C</b></span><span>Humidity<b>{current.humidity}%</b></span><span>Pressure<b>{current.pressure} hPa</b></span></div>
            </article>
            <article className="metric-card"><div className="metric-heading"><span>WIND SPEED</span><span className="metric-icon">↗</span></div><div className="metric-value">{data.wind?.speed ?? "—"} <small>m/s</small></div><p>Current wind speed</p><div className="metric-bar"><span style={{ width: `${Math.min((data.wind?.speed ?? 0) / 20 * 100, 100)}%` }} /></div></article>
            <article className="metric-card"><div className="metric-heading"><span>RELATIVE HUMIDITY</span><span className="metric-icon">◉</span></div><div className="metric-value">{current.humidity ?? "—"} <small>%</small></div><p>Moisture in the air</p><div className="metric-bar"><span style={{ width: `${current.humidity ?? 0}%` }} /></div></article>
            <article className="metric-card"><div className="metric-heading"><span>FEELS LIKE</span><span className="metric-icon">♨</span></div><div className="metric-value">{Math.round(current.feels_like ?? current.temp)} <small>°C</small></div><p>Perceived temperature</p><div className="metric-bar"><span style={{ width: `${Math.min(Math.max(((current.feels_like ?? current.temp) + 10) / 55 * 100, 0), 100)}%` }} /></div></article>
            <article className="metric-card"><div className="metric-heading"><span>BAROMETRIC PRESSURE</span><span className="metric-icon">＋</span></div><div className="metric-value">{current.pressure ?? "—"} <small>hPa</small></div><p>Atmospheric pressure</p><div className="metric-bar"><span style={{ width: `${Math.min((current.pressure ?? 0) / 1200 * 100, 100)}%` }} /></div></article>
          </div>
         </section>
      )}

      <footer className="footer"><span><strong>SkyCast</strong> · Precision Weather</span><span>Powered by OpenWeather</span></footer>
    </main>
  );
}
