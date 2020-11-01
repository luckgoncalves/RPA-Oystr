import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logoOystr from '../../assets/img/logo-branca.svg'
import { Container } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
       <Navbar className="mr-5" dark expand="lg">
        <NavbarBrand href="/"><img src={logoOystr} alt="Oystr." /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink className="active" href="#whatWheDo">O que fazemos</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="#aboutRobots">Sobre nosso robôs</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="#benefits">Beneficios</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="#contact">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;