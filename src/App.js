import MyNav from "./components/MyNav";
import SearchLocation from "./components/SearchLocation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Form, Col } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [specMeteo, setSpecMeteo] = useState("");

  return (
    <div>
      <Container>
        <header>
          <MyNav />
        </header>

        <body>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">Ricerche veloci !</h2>
            <Form.Select
              aria-label="Default select example"
              value={specMeteo}
              onChange={(e) => {
                setSpecMeteo(e.target.value)
              }}
            >
              <option>Rovigo</option>
              <option>Padova</option>
              <option>Roma</option>
              <option>Verona</option>
              <option>Los Angeles</option>
              <option>New York</option>
            </Form.Select>
          </Col>
        </Row>

          <SearchLocation specMeteo={specMeteo} />
        </body>
      </Container>
    </div>
  );
};

export default App;
