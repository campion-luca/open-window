import { Card, Col, Row, Container, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container className="mt-4">
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1>OPEN WINDOW</h1>
            <p>Hai mai chiesto innocentemente che tempo facesse fuori per sentirti rispondere :</p>
            <p>"Apri la finestra e controlla"</p>
            <p>Benissimo, d'ora in poi potrai aprire quella famosa finestra da computer in un altra finestra del tuo brwoser per assurdo!</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Ricerca</Card.Title>
                <Card.Text>
                  Potrai ricercare "a mano" la città di cui ti interessa sapere il meteo e molte altre informazioni ovviamente.
                </Card.Text>
                <Button variant="outline-dark" onClick={() => navigate('/searching')}>apri finestra</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Curiosità</Card.Title>
                <Card.Text>
                  Alcune città all'apparenza normali.. ma cliccando capirai qualcosa in più, magari una prossima vacanza futura, chissà..
                </Card.Text>
                <Button variant="outline-dark" onClick={() => navigate('/curiosities')}>apri finestra</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Extra</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sequi nostrum? Perferendis voluptate temporibus
                </Card.Text>
                <Button variant="outline-dark" onClick={() => navigate('/extra')}>apri finestra</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Home