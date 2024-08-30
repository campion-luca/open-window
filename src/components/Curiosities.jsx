import SearchLocation from "./SearchLocation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Form, Col, Container } from "react-bootstrap";
import { useState } from "react";

const Curiosities = () => {
  const [specMeteo, setSpecMeteo] = useState("Rovigo");

  return(
  <Container>
    <Row className="justify-content-center mb-4">
      <Col xs={12} md={10} lg={7}>
        <h1 className="text-center mt-4"> CURIOSITA' DAL MONDO</h1>
        <p className="text-center">Alcune di queste città qui sotto hanno delle peculiarità.. cliccale per scoprire quali..</p>

        <Form.Select
          aria-label="Default select example"
          value={specMeteo}
          onChange={(e) => {
            setSpecMeteo(e.target.value);
          }}
        >
          <option>Rovigo</option>
          <option>Padova</option>
          <option>Roma</option>
          <option>Verona</option>
          <option>Los Angeles</option>
          <option>Mawsynram</option>
        </Form.Select>
      </Col>
    </Row> 
     <SearchLocation specMeteo={specMeteo} />


    </Container>
  
        )
};

export default Curiosities