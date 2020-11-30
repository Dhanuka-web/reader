
import React, { Component } from 'react'
import {  Nav, Navbar, } from 'react-bootstrap';
import form from './form';
//import MenuLink from './menuLinks';


 
class menu extends Component {
    render() {
        return (
            <div>



<Navbar collapseOnSelect expand="lg" className='nav'  variant="dark"  fixed="top" >
  <Navbar.Brand href="#home"><i>E- Reader</i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link >&nbsp;</Nav.Link>
      <Nav.Link >&nbsp;</Nav.Link>
     
    </Nav>
    <Nav>
     <Nav.Link href="{this.props.menuItem1}">Home</Nav.Link>
      <Nav.Link  href="{this.props.menuItem4}">Books </Nav.Link>
      <Nav.Link  href="{this.props.menuItem2}">Add Books </Nav.Link>
      <Nav.Link  href="{this.props.menuItem3}">Contact </Nav.Link>
        </Nav>
  </Navbar.Collapse>
  
</Navbar>





            </div>
        )
    }
}
export default menu;



