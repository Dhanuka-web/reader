import React, { Component } from 'react'
import Menu from './menu';
import Slider from './slider';
import Form from './component/form';
import Contact from './component/contact';

class menuLinks extends Component {
    render() {
        return (
            <div>                

                <Menu menuItem1='Slider.js' menuItem2='Form.js' menuItem3='Contact.js' menuItem4='Books.js' />
            </div>
        )
    }
}
export default menuLinks;