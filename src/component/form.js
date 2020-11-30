import React, { Component } from 'react'
import firebase from '../configuration/config';
import { Form, Button,Card, CardDeck } from 'react-bootstrap';
const db = firebase.firestore();





class form extends Component {

    state = {
        dataAr: [],
        bookName: '',
        bookAuthor: '',
        description: '',
        isbn: '',
        bookPrice: '',
      
        userName: 'bookadmin',
        password: 'pwdadmin'

    }


    componentDidMount() {
        db.collection('dataTable').get().then(data => {
            data.docs.forEach(doc => {

                this.setState({
                    dataAr: [...this.state.dataAr, doc.data()]
                })

                // console.log('form',doc.data());
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //define onsubmit function

    submitData = (e) => {
        //to stop the reload
        e.preventDefault();
        //console.log(
        // this.state.bookName,
        //  this.state.bookAuthor,
        //  this.state.descrption,
        // this.state.isbn,
        // this.state.bookPrice
        //)



        // send data to db
        db.collection('dataTable').add({
            bookName: this.state.bookName,
            bookAuthor: this.state.bookAuthor,
            bookPrice: this.state.bookPrice,
            isbn: this.state.isbn,
            description: this.state.description
        })

    }


    render() {
        return (
            <div className='bgcolr'>
               
                {this.state.dataAr.length ? (
                    //desplay data
                    this.state.dataAr.map(item => {
                        return (
                            <div>

                                <CardDeck>
                                    <Card>
                                        
                                        <Card.Body>
                                        
                                            <Card.Title><b>{item.bookName}</b></Card.Title>
                                            <hr/>
                                            <Card.Text>
                                                
                                            
                                            <p>Book Author:&nbsp;{item.bookAuthor}</p>
                                            <p>Book Description:&nbsp;{item.description}</p>
                                            <p>ISBN :&nbsp;{item.isbn}</p>
                                            <p>Book Price:&nbsp;{item.bookPrice}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="primary">Add to Cart</Button>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>


                                
                                <p>{item.userName}</p>
                                <p>{item.password}</p>
                            </div>
                        )
                    })
                ) : (
                        //loading
                        <p>loading</p>
                    )}


                <center>
                    <center><h2>Add New Book</h2></center>
                    <Form className='fom' onSubmit={this.submitData}>
                        <Form.Group controlId="bookName" className='group'>
                            <Form.Control type="text" name="bookName" placeholder="Book Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="bookAuthor">
                            <Form.Control type="text" name="bookAuthor" placeholder="Author" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Control type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="isbn">
                            <Form.Control type="text" name="isbn" placeholder="ISBN" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="bookPrice">
                            <Form.Control type="text" name="bookPrice" placeholder="Price" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="userName">
                            <Form.Control type="text" name="userName" placeholder="User Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Control type="Password" name="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>



                        <Button variant="primary" type="submit">
                            Submit
                                    </Button>
                    </Form>

                </center>

            </div >
        )
    }
}
export default form;