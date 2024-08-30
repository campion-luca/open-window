import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Search = () => {
  // State per l'input e il risultato
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // Funzione di gestione del click
  const handleButtonClick = () => {
    // Logica per determinare il risultato (qui è un esempio statico)
    setResult(`Hai inserito: ${inputValue}`);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Esempio di Pagina con Input</h1>
          <Form>
            <Form.Group controlId="formBasicInput">
              <Form.Label>Inserisci qualcosa:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Scrivi qui..." 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleButtonClick}>
              Mostra Risultato
            </Button>
          </Form>
          {result && (
            <Alert variant="info" className="mt-3">
              {result}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;