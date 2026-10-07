Get Your Weather
https://pvilchisrizo.github.io/weather-assessment/

This is a responsive weather forecasting app built with React and OpenWeatherMap API.

Features

-Search by city name.
-Current temperature, feels-like, humidity, wind speed and pressure.
-5 days forecast with highs and lows.
-C/F Toggle option(no extra API calls).

Setup

-Clone the repo
git clone (https://github.com/Pvilchisrizo/weather-assessment.git)
-Install dependencies
npm install
-Get API key
https://openweathermap.org/api
-Create .env file in the root
VITE_OWM_API_KEY=your_key_here
-Run the app
npm run dev

Structure

API/ - Fetch logic and HTTP errors
useWeather.js - Manages loading, data state and cancels stale requests
units-forecast -Data is always fetched in metric and converted client-side for instant unit switching. Groups 3-hour forecast data into days.
components - Components that receive data via props
