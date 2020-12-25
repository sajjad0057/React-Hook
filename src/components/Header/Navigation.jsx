import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const Navigation= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
          <div className="container">
          <NavbarBrand href="/">React Hook</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
            <NavItem style={{marginRight:"10px"}}>
              <NavLink exact to="/" className="NavLink">Home</NavLink>
            </NavItem> 
            <NavItem style={{marginRight:"10px"}}>
              <NavLink exact to="/setname" className="NavLink">useState</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"10px"}}>
              <NavLink exact to="/useEffect" className="NavLink">useEffect</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"10px"}}>
              <NavLink exact to="/useContext" className="NavLink">useContext</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"10px"}}>
              <NavLink exact to="/useReducer" className="NavLink">useReducer</NavLink>
            </NavItem>   
          </Nav>
        <NavbarText>practice Hook</NavbarText>
        </Collapse>

          </div>

      </Navbar>
    </div>
  );
}

export default Navigation;