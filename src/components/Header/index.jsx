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
  const pathname = window.location.pathname
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container pathname={pathname}>
       <Navbar className="mr-md-5" dark expand="lg">
        <NavbarBrand href="/"><img src={logoOystr} alt="Oystr." /></NavbarBrand>
        <NavbarToggler style={{border: 'none'}} onClick={toggle}>
          <img src={require('../../assets/img/hamburger.svg').default} alt="Menu"/>
        </NavbarToggler>
        <Collapse style={{background: '#065170'}} isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink className="active" href="/team">Quem somos</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink className="active" href="/#whatWheDo">O que fazemos</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="/#aboutRobots">Sobre nosso robôs</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="/#benefits">Beneficios</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink href="/#contact">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;