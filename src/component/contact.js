import React, { Component } from 'react'
import { Container,  Row, Col,  Form,  Button } from 'react-bootstrap';

class contact extends Component {
    render() {
        return (
            <div>
                


                <Container fluid >
                <Row className="justify-content-md-center">
                   <center> <h3> Contact</h3></center>
                </Row>
                <Row className="justify-content-md-center">
                    
                        <Col>
                            <p>E-mail:- ihdhanunadee@gmail.com</p>
                            <p>Tel:- +94 71 4705850</p>
                            <p>Fax:- +94 71 4705850</p>
                            <p>No.90. Araliya Road, Colombo</p>
                            
                        </Col>
                        <Col>

                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="subject" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default contact;