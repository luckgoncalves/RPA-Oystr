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
       <Navbar className="mr-5" expand="md">
        <NavbarBrand href="/"><img src={logoOystr} alt="Oystr." /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">O que fazemos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Sobre nosso robôs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Beneficios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;