import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className='footer'>
                    <Row >
                        <Col className='foot'>
                        <p>+94 71 4705850</p>
                        <p>ihdhanunadee@gmail.com</p>
                        <p> Copyright by Dhanu. All right received</p>
                        </Col>
                        <Col className='foot'>
                        <Form>
                            <Form.Group controlId="formSubscribe"> 
                                <Form.Control type="Subscrive" placeholder="SUBSCRIBE" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                Submit
                            </Button>

                            </Form>
                        </Col >
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
export default footer;