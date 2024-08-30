import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Search = () => {
  // State per l'input e il risultato
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [name, setName] = useState({});

  // AGGIUNTA
  const fetchSpecMeteo = () => {
    console.log("fetch avviata");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=5fb43d9317a963bf83907952a8a8a3f3`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((meteo) => {
        console.log("RISULTATO TROVATO", meteo);
        setResult(meteo.weather[0]);
        setName(meteo);
      })
      .catch((err) => {
        console.log("ERRORE di tipo", err);
      });
  };
  // AGGIUNTA

  // Funzione di gestione del click
  const handleButtonClick = () => {
    fetchSpecMeteo();
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">RICERCA LA TUA CITTA'</h1>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Scrivi qui..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="outline-dark"
              onClick={handleButtonClick}
              className="mt-3"
            >
              apri finestra
            </Button>
          </Form>

          <Container className="mt-4">
            <Row className="justify-content-center">
              <Col md={6}>
                <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                  <Card.Body>
                    <Card.Title className="text-center text-primary">
                      {name.name}
                    </Card.Title>
                    <Card.Text className="text-center">
                      <strong>METEO |</strong> {result.main}
                    </Card.Text>
                    <Card.Text className="text-center">
                      <strong>descrizione |</strong> {result.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
