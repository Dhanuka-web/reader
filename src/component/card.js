import React, { Component } from 'react'
import { Form, Container, Row, Col, Button  } from 'react-bootstrap';

class card extends Component {
    render() {
        return (
            <div>


                <Container fluid >
                <Row className="justify-content-md-center">
                    <Col>
                    <center><h2>Add Book</h2></center>
                      <center>  <Form className='form'>
                            <Form.Group controlId="bookName"> 
                                <Form.Control type="bookName" placeholder="Book Name" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="bookAuthor"> 
                                <Form.Control type="BookAuthor" placeholder="Author" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="ISBN"> 
                                <Form.Control type="ISBN" placeholder="ISBN" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="bookPrice"> 
                                <Form.Control type="bookPrice" placeholder="Price" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="userName"> 
                                <Form.Control type="userName" placeholder="User Name" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="Password"> 
                                <Form.Control type="Password" placeholder="Password" />
                                <Form.Text className="text-muted">    
                                </Form.Text>
                            </Form.Group>

                            

                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form></center>
                </Col>
            </Row> <br/>
            </Container>



            </div>
        )
    }
}
export default card