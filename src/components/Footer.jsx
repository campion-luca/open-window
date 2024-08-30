import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className="text-dark text-center py-3 mt-auto bg-body-tertiary fixed-bottom">
      <Row>
        <Col className="text-center">Chi siamo?</Col>
        <Col className="text-center">Dove siamo?</Col>
        <Col className="text-center">Contattaci</Col>
      </Row>
    </Container>
  )
}

export default Footer