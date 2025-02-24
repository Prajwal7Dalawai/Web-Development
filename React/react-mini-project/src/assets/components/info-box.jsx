import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox(){
    let info = {
        city:"Hubli",
        feelsLike: 300.94,
        humidity: 42,
        minTemp: 301.14,
        temp: 301.14,
        tempMax: 301.14,
        weather: "smoke"
    }
    return(
        <div className="infoBox">
            <h1>Weather info: {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1635061285225-8bffdb7f45a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Smoke"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature: {info.temp}</p>
          <p>Humidity: {info.humidity}</p>
          <p>Weather: {info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}