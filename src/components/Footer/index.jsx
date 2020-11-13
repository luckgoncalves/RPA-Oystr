import React from 'react'
import linkedin from '../../assets/img/linkedin.svg'
import { useHistory } from 'react-router-dom'
import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import { Container } from './styles'
import { useDispatch } from 'react-redux'

function Footer(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const goTo = async(href) => {
    await dispatch({type: 'ROUTE', payload: href})
    history.push(href)

    const selected = href.replace('/', '')
    const elem = document.querySelector(selected)
    
    elem && elem.scrollIntoView({behavior: 'smooth', block: 'center' })
  }

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
          <li onClick={() => goTo('/team')}>Quem somos</li>
          <li onClick={() => goTo('/#whatWheDo')}>O que fazemos</li>
          <li onClick={() => goTo('/#aboutRobots')}>Sobre nosso robôs</li>
          <li onClick={() => goTo('/#benefits')}>Benefícios</li>
          <li onClick={() => goTo('/#contact')}>Contato</li>
        </ul>
      </div>
      <div className="contato order-1 order-lg-2">
        <h4>Fale Conosco</h4>
        <p>Entre em contato em +55 41 9148-7519</p>
        <p>suporte@oystr.com.br</p>
        <div className="redes-sociais">
          <a title="Facebook Oystr" href="https://www.facebook.com/oystr.com.br" target="_blank" without="true" rel="noreferrer">
            <img src={facebook} alt="Facebook"/>
          </a>
          <a title="Linkedin Oystr" href="https://www.linkedin.com/company/oystr---rob%C3%B4s-inteligentes/" target="_blank" without="true" rel="noreferrer">
            <img src={linkedin} alt="Linkedin"/>
          </a>
          <a title="Instagram Oystr" href="https://www.instagram.com/oystr.com.br/" target="_blank" without="true" rel="noreferrer">
            <img src={instagram} alt="Instagram"/>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;