import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { useHistory } from 'react-router-dom'
import logoOystr from '../../assets/img/logo-branca.svg'
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux'

function Header() {
  const history = useHistory();
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  
  useEffect(() => {
    setPath();
  }, [window.location.pathname]) //eslint-disable-line

  const setPath = async () => {
    await dispatch({type: 'ROUTE', payload: window.location.pathname})
  }

  const goTo = async(href) => {
    await dispatch({type: 'ROUTE', payload: href})
    history.push(href)

    const selected = href.replace('/', '')
    const elem = document.querySelector(selected)
    
    elem && elem.scrollIntoView({behavior: 'smooth', block: 'center' })
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Container pathname={state.path}>
       <Navbar className="mr-md-5" dark expand="lg">
        <NavbarBrand href="/"><img src={logoOystr} alt="Oystr." /></NavbarBrand>
        <NavbarToggler style={{border: 'none'}} onClick={toggle}>
          <img src={require('../../assets/img/hamburger.svg').default} alt="Menu"/>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink className="active" onClick={() => goTo('/team')}>Quem somos</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink className="active" onClick={() => goTo('/#whatWheDo')}>O que fazemos</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink onClick={() => goTo('/#aboutRobots')}>Sobre nosso robôs</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink onClick={() => goTo('/#benefits')}>Beneficios</NavLink>
            </NavItem>
            <NavItem className="mx-xl-4 mx-lg-3">
              <NavLink onClick={() => goTo('/#contact')}>Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;