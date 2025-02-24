import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
export default function SearchBox(){
    let [city, setCity] = useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "d8d7e8f9e336f9385e835753b6e51f91"

    let getWeather = async (city) => {
      let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metrics`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };
      console.log(result);
    }

    const handleChange = (event) =>{
        setCity(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(city);
        getWeather(city);
        setCity("");
    }
    return(
        <div> <h3>Search for Weather</h3>
        <form onSubmit={handleSubmit}>
           
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br /><br />
            <Button type="submit" variant='contained'>Search</Button>
        </form>
        </div>
    )
}