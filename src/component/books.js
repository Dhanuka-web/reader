import React, { Component } from 'react'
import { Button, Card, CardDeck, Container, Row   } from 'react-bootstrap';
import cimage5 from '../img/hp5.jpg';
import cimage4 from '../img/hp4.jpg';
import cimage1 from '../img/hp1.jpg';

class books extends Component {
    render() {
        return (
            
            <Container>
  <Row>
    
  
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={cimage5} />
                        <Card.Body>
                            <Card.Title>Harry Potter and the Philosopher's Stone</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary">Add to Cart</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={cimage4} />
                        <Card.Body>
                            <Card.Title>Harry Potter and the Prisoner of Azkaban</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary">Add to Cart</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={cimage1} />
                        <Card.Body>
                            <Card.Title>Harry Potter and the Goblet of Fire</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary">Add to Cart</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>


            </div >

            </Row>
</Container>


        )
    }
}
export default books;