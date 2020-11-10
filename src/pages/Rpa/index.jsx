import React from 'react'
import { useState } from 'react'
import bots from '../../assets/img/Frame.svg'
import kelri from '../../assets/img/kelri.svg'
import fotoEquipe from '../../assets/img/foto-equipe.svg'
import fotoOystr from '../../assets/img/foto-oystr.svg'
import money from '../../assets/img/money.svg'
import implementer from '../../assets/img/implementer.svg'
import win from '../../assets/img/win.svg'
import monitoring from '../../assets/img/monitoring.svg'
import marketing from '../../assets/img/marketing.svg'
import robot from '../../assets/img/robot.svg'
import time from '../../assets/img/time.svg'
import ellipse from '../../assets/img/ellipse.svg'
import play from '../../assets/img/play.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Contact, Testmonials, Bots, CardQuestions } from './styles'

function Rpa() {
  const cards = [
    {icon: money, title: 'Baixo investimento', text: 'Modelo simples de cobrança, sem multas de contrato e de rápido retorno.'},
    {icon: implementer, title: 'Sem trauma de implantação', text: 'Robôs rodando na sua empresa em até 6 semanas.'},
    {icon: win, title: 'Melhore a experiência dos seus colaboradores', text: 'Analistas devem analisar. Coordenadores devem coordenar e gerentes devem gerenciar. Tarefas repetitivas ficam com nossos robôs.'},
    {icon: monitoring, title: 'Controle seus robôs', text: 'Gerencie seus robôs em nossa plataforma.'},
  ]

  const [ questions, setQuestions ] = useState([
    {
      id: 0, 
      title: "Como funciona?", 
      active: "active", 
      text: "Solicite a lista de robôs que temos para suas carteiras. São mais de 400 robôs! Se não encontrar o que precisa, nossa equipe técnica levanta as suas necessidades e desenha o projeto sem custo!"
    },{
      id: 1, 
      title: "Quanto tempo para criar um robô?", 
      active: "", 
      text: "Após entrer em contato com sua equipe, vamos iniciar um projeto com o mapeamento de suas necessidades e logo em seguida passamos um prazo que pode ser de 2 semanas, 4 semanas ou 6 semanas."
    },{
      id: 2, 
      title: "Quais carteiras trabalhamos?",
      active: "", 
      text: "Solicite a lista de robôs que temos para suas carteiras. São mais de 400 robôs! Se não encontrar o que precisa, nossa equipe técnica levanta as suas necessidades e desenha o projeto sem custo!"
    },{
      id: 3, 
      title: "Como são as integrações?", 
      active: "", 
      text: "Você precisa enviar um e-mail para nossa equipe, suporte@oystr.com.br. E vamos entrar em contato para liberar a API."
    }
  ])
  return (
    <>
      <main>
       <Bots id="whatWheDo" className="d-flex flex-column w-100">
        <div className="d-flex justify-content-center justify-content-lg-between row mx-xs-3 mx-md-3 mx-3 mx-lg-0">
          <div className="p-0 p-lg-5 py-5 py-lg-0 text-left col-12 col-lg-6">
            <h2 className="fw-bold mb-3">Robôs inteligentes para multiplicar a produtividade da sua empresa</h2>
            <p className="fw-400 mb-3" style={{color: '#E5E5E5'}}>Integre seus sistemas, escale seu negócio e acabe com o retrabalho.<br />Nossos robôs no operacional, sua equipe nas análises e decisões.</p>
            <button className="button-agenda fw-700">Agendar demonstração</button>
          </div>
          <div className="d-none d-lg-inline col-5 pr-0" style={{position: 'relative'}}>
            <div>
              <img className="ellipse" src={ellipse} alt="Ellipse" />
              <img src={fotoOystr} alt="Equipe" style={{width:'100%', position: 'absolute', left: 0, bottom: 0}}/>
            </div>
          </div>
        </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around statistic mx-3 mx-md-3 p-5 bg-white">
            <div className="d-flex align-items-center statistic-card mb-5 mb-lg-0 justify-content-center">
              <div className="statistic-icon">
                <img src={marketing} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Empresas auxiliadas</h5>
                <p>mais de 150</p>
              </div>
            </div>
            <div className="d-flex align-items-center statistic-card mb-5 mb-lg-0 justify-content-center">
              <div className="statistic-icon">
                <img src={robot} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Robôs criados</h5>
                <p>mais de 400</p>
              </div>
            </div>
            <div className="d-flex align-items-center statistic-card mb-5 mb-lg-0 justify-content-center">
              <div className="statistic-icon">
                <img src={time} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Horas economizadas</h5>
                <p>84 mil horas</p>
              </div>
            </div>
          </div>
      </Bots>
     <section id="aboutRobots" className="my-5" >
        <h2 className="fw-700" style={{color: '#E5E5E5'}}>Quais problemas<br /> nossos robôs resolvem</h2>
        <div className="d-flex row mx-0 my-5 mx-md-5 justify-content-center">
          <div className="col-xs-12 col-lg-5 d-none d-lg-inline">
            <img src={bots} className="w-100"  alt="Bots"/>
          </div>
          <div className="col-xs-12 col-xl-7">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <div className="card-problemas">
                <h3>Planilhas e sistemas divergentes</h3>
                <p>Nossos robôs navegam  como humanos, e o melhor, sem envolver uma equipe de TI, tornando possível integrar sistemas diferentes, planilhas e plataformas sem a necessidade de pessoas para controlar.</p>
              </div>
              <div className="card-problemas">
                <h3>Acabe com os processos repetitivosque não agregam.</h3>
                <p>Se você tem um processo que tenha volume e leve pelo menos 8 horas de execução por semana ele deve e pode ser automatizado.</p>
              </div>
              <button className="d-none d-lg-block button-agenda mt-5">Agendar demonstração</button>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className="card-problemas">
                <h3>Lentidão e erros em tarefas operacionais.</h3>
                <p>Além de executar mais rápido, os robôs conseguem conferir entregas, seguindo padrões de qualidade e compliance.</p>
              </div>
              <div className="card-problemas">
                <h3>Controlicos de demanda operacional</h3>
                <p>Tenho o controle e aumente exponencialmente a escala e capacidade de entrega da sua operação, sem perder qualidade.</p>
              </div>
              <button className="d-block d-lg-none button-agenda ml-md-3 mt-5">Agendar demonstração</button>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" className="py-5 d-flex flex-column justify-content-start align-items-end" style={{background: '#0D8D91'}}>
        <div className="w-100">
          <h2 className="fw-700" style={{color: '#E5E5E5'}}>Soluções sob medida<br /> para suas necessidades de negócios</h2>
        </div>
        <div className="conteiner-card d-flex my-5 px-3 ml-3">
          {cards.map( card => 
            <div className="card mx-3">
              <div className="card-body px-5">
                <div>
                  <div className="elipse-img-card"></div>
                  <img src={card.icon} className="card-ico mt-3 d-block" alt="Card" />
                </div>
                <div className="card-title text-left my-3" style={{color: '#000'}}>{card.title}</div>
                <div className="card-text text-left" style={{color: '#000'}}>{card.text}</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Testmonials className="d-flex flex-column flex-lg-row row w-100">
        <div className="p-0 img-depoimento col-12 col-lg-5">
          <LazyLoadImage
              alt={'Kelri'}
              effect="blur"
              src={kelri} />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column text-depoimento p-5 col-12 col-lg-7">
          <div className="text-left d-flex align-items-center justify-content-center desc-depoimento mb-5">
            <p>"A aplicação dessas ferramentas na rotina operacional gerou também uma economia para o escritório, permitindo a ampliação de atuação no pais com a entrada de novos clientes sem a necessidade da ampliação de capacite humano.
            <br /><br />Vamos em frente na parceria com a Oystr na busca de novas ferramentas e mais evolução sempre."</p>
          </div>
          <div className="footer-depoimento d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="autor-depoimento mx-3"><span>Kelri Molina</span> </div>
              <div className="mx-5" style={{height: '31px', border: '1px solid #396AB7'}}></div>
              <div className="escritorio-depoimento mx-3"><span>Mascarenhas Barbosa</span></div>
            </div>
            <button className="button-depoimento mx-3 mt-3 mt-lg-0"> Mais depoimentos </button>
          </div>
        </div>
      </Testmonials>
      <section className="d-flex flex-column justify-content-center align-items-center p-5" style={{background: '#0D8D91'}}>
        <div>
          <h2>Perguntas Frequentes</h2>
          <p>Confira as maiores dúvidas para entregar robôs nas operações.</p>
        </div>
        <div className="d-flex align-items-center my-5 justify-content-center w-100">
          <div className="list-questions" style={{zIndex:11, width: '25rem'}}>
            <ul className="list-perguntas text-left">
              {questions.map( qt => 
              <>
                <li key={qt.id} onClick={() => setQuestions(questions.map( q => q.id === qt.id ? {...q, active: "active"} : {...q, active: ""}))} className={`d-flex justify-content-between ${qt.active}`}>{qt.title} 
                  <div style={{width: '26px', height: '26px', borderRadius: '50%', background: '#FF4A6B'}} className="tag-play  d-none d-lg-flex align-items-center justify-content-center"><img src={play} alt="Play"/></div>
                </li>
                {qt.active === 'active' && (
                  <CardQuestions className="d-flex d-lg-none card" style={{zIndex:10}}>
                    <div className="card-body ">
                      <div className="card-text text-left" style={{color: '#000'}}>
                        {qt.text}
                      </div>
                    </div>
                  </CardQuestions>
                )}
                </>
              )}
            </ul>
          </div>
          <div className="d-none d-lg-flex card card-perguntas mx-3" style={{zIndex:10}}>
            <div className="card-body ">
              {questions.map( qf => qf.active === 'active' &&
                <div className="card-text text-left" style={{color: '#000'}}>
                  {qf.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Contact id="contact" className="d-flex flex-column flex-lg-row justify-content-between align-items-center justify-content-center">
        <div className="order-1 order-lg-0 p-5 w-100 w-lg-50 text-left d-flex justify-content-center align-items-center">
          <div className="data-contact mx-auto">
            <h2 className="mb-5 mb-lg-0">Vamos fazer seu negócio<br/> crescer, juntos</h2>
            <p>Clique abaixo e vamos conversar!</p>
            <button className="button-contato mt-5 mt-lg-0">Fale conosco pelo WhatsApp</button>
          </div>
        </div>
        <figure className="order-0 order-lg-1 mb-0">
          <LazyLoadImage
            alt={'Equipe Oystr'}
            effect="blur"
            src={fotoEquipe} />
        </figure>
      </Contact>
      </main>
    </>
  );
}

export default Rpa;
