import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"

const SearchLocation = ({specMeteo}) => {
    const [meteo, setMeteo] = useState({})

    useEffect(() => {
        fetchSpecMeteo()
}, [specMeteo])

const fetchSpecMeteo = () => {
    console.log("fetch avviata")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${specMeteo}&appid=5fb43d9317a963bf83907952a8a8a3f3`)
    
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("errore nella chiamata")
        }
    })
    .then((meteo) => {
        console.log("risultato fetch tornato", meteo)
        setMeteo(meteo) // inserisco il risultato
    })
    .catch((err) => {
        console.log("ERRORE di tipo", err)
    })
}

return(
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{meteo.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)
}

export default SearchLocation