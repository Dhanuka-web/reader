import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';

 class slider extends Component {
    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to E-Reader </h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Easy to buy e-books</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Easy to add a new book</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        )
    }
}
export default slider;