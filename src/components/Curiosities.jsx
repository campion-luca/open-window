import SearchLocation from "./SearchLocation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Form, Col } from "react-bootstrap";
import { useState } from "react";

const Curiosities = () => {
  const [specMeteo, setSpecMeteo] = useState("");

  <>
    <Row className="justify-content-center mb-4">
      <Col xs={12} md={8} lg={6}>
        <h2 className="text-center">Ricerche Interessanti !</h2>
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
          <option>New York</option>
        </Form.Select>
      </Col>
    </Row>
    <SearchLocation specMeteo={specMeteo} />
  </>;
};

export default Curiosities