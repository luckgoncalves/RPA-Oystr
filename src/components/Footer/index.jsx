import React from 'react'
import linkedin from '../../assets/img/linkedin.svg'
import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import { Container } from './styles'

function Footer() {
  return (
    <Container className="p-5 d-flex flex-column flex-lg-row justify-content-around ">
      <div className="d-none d-lg-inline">
        <h4>Produto</h4>
        <ul>
          <li>Robôs para escritório de advocacia</li>
          <li>Robôs para contabilidade</li>
          <li>Robôs para transportadoras</li>
          <li>Robôs para RH</li>
        </ul>
      </div>
      <div className="order-2 order-lg-1">
        <h4>Empresa</h4>
        <ul>
          <li>Sobre Nós</li>
          <li>Carreira</li>
          <li>Sócios</li>
        </ul>
      </div>
      <div className="order-1 order-lg-2">
        <h4>Fale Conosco</h4>
        <p>Entre em contato em +55 41 9148-7519</p>
        <p>suporte@oystr.com.br</p>
        <div className="redes-sociais">
          <img src={facebook} alt="Facebook"/>
          <img src={linkedin} alt="Linkedin"/>
          <img src={instagram} alt="Instagram"/>
        </div>
      </div>
    </Container>
  );
}

export default Footer;