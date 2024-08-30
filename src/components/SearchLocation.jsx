import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const SearchLocation = ({ specMeteo }) => {
  const [meteo, setMeteo] = useState({});
  const [weather, setWeather] = useState([]);
  const [wind, setWind] = useState();

  useEffect(() => {
    fetchSpecMeteo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specMeteo]);

  const fetchSpecMeteo = () => {
    console.log("fetch avviata");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${specMeteo}&appid=5fb43d9317a963bf83907952a8a8a3f3`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((meteo) => {
        console.log("risultato fetch tornato", meteo);
        setMeteo(meteo); // inserisco il risultato

        setWind(meteo.wind);
        console.log("il vento ritorna PORCA MADONNA ---> ", wind.speed);

        setWeather(meteo.weather[0]);
        console.log("weather da..", weather.main);
      })
      .catch((err) => {
        console.log("ERRORE di tipo", err);
      });
  };

//   const showIf = () => {
//     {specMeteo} === 
//   }

  return (
    <Card style={{ width: '18rem' }} className="text-center ms-auto me-auto">
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/025/254/963/small/isolated-3d-rendering-of-a-modern-window-for-home-png.png" />
      <Card.Body>
        <Card.Title>
          <h1>{meteo.name}</h1>
        </Card.Title>
        <Card.Text>
          <h5>CLIMA</h5>
          il clima al momento è {weather.main} , per essere precisi {" "}
          {weather.description}
          <h5 className="mt-3">VENTO</h5>
          il vento al momento è forte {wind.speed}
        </Card.Text>
        <Button variant="outline-dark">apri la finestra sulla curiosità</Button>
      </Card.Body>
    </Card>
  );
};

export default SearchLocation;
