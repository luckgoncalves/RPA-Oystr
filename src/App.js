import Header from './components/Header'
import Footer from './components/Footer'
import bots from './assets/img/Frame.svg'
import kelri from './assets/img/kelri.svg'
import fotoEquipe from './assets/img/foto-equipe.svg'
import fotoOystr from './assets/img/foto-oystr.svg'
import money from './assets/img/money.svg'
import implementer from './assets/img/implementer.svg'
import win from './assets/img/win.svg'
import monitoring from './assets/img/monitoring.svg'
import marketing from './assets/img/marketing.svg'
import robot from './assets/img/robot.svg'
import time from './assets/img/time.svg'
import ellipse from './assets/img/ellipse.svg'
import './App.css';

function App() {
  const cards = [
    {icon: money, title: 'Baixo investimento', text: 'Modelo simples de cobrança, sem multas de contrato e de rápido retorno.'},
    {icon: implementer, title: 'Sem trauma de implantação', text: 'Robôs rodando na sua empresa em até 6 semanas.'},
    {icon: win, title: 'Melhore a experiência dos seus colaboradores', text: 'Analistas devem analisar. Coordenadores devem coordenar e gerentes devem gerenciar. Tarefas repetitivas ficam com nossos robôs.'},
    {icon: monitoring, title: 'Controle seus robôs', text: 'Gerencie seus robôs em nossa plataforma.'},
  ]
  return (
    <div className="App">
      <Header />
      <main>
       <section className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="p-5 text-left">
            <h2>Robôs inteligentes para multiplicar a produtividade da sua empresa</h2>
            <p>Integre seus sistemas, acabe com o retrabalho e escale seu negócio!</p>
            <button className="button-agenda">Agendar demonstração</button>
          </div>
          <div style={{position: 'relative'}}>
            <img className="ellipse" src={ellipse} alt="Ellipse" />
            <img src={fotoOystr} alt="Equipe"/>
          </div>
        </div>
          <div className="d-flex justify-content-around statistic mx-5 p-5 bg-white">
            <div className="d-flex align-items-center statistic-card">
              <div className="statistic-icon">
                <img src={marketing} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Empresas auxiliadas</h5>
                <p>mais de 150</p>
              </div>
            </div>
            <div className="d-flex align-items-center statistic-card">
              <div className="statistic-icon">
                <img src={robot} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Robôs criados</h5>
                <p>mais de 400</p>
              </div>
            </div>
            <div className="d-flex align-items-center statistic-card">
              <div className="statistic-icon">
                <img src={time} alt="Oystr"/>
              </div>
              <div className="text-left statistic-text">
                <h5>Horas economizadas</h5>
                <p>84 mil horas</p>
              </div>
            </div>
          </div>
      </section>
     <section className="my-5" >
        <h2>Quais problemas nossos robôs resolvem</h2>
        <div className="d-flex row m-5 justify-content-center">
          <div className="col-xs-12 col-lg-5">
            <img src={bots} className="w-100"  alt="Bots"/>
          </div>
          <div className="col-xs-12 col-xl-7">
          <div className="row">
            <div className="col-6">
              <div className="card-problemas">
                <h3>Planilhas e sistemas divergentes</h3>
                <p>Nossos robôs navegam  como humanos, e o melhor, sem envolver uma equipe de TI, tornando possível integrar sistemas diferentes, planilhas e plataformas sem a necessidade de pessoas para controlar.</p>
              </div>
              <div className="card-problemas">
                <h3>Acabe com os processos repetitivosque não agregam.</h3>
                <p>Se você tem um processo que tenha volume e leve pelo menos 8 horas de execução por semana ele deve e pode ser automatizado.</p>
              </div>
              <button className="button-agenda mt-5">Agendar demonstração</button>
            </div>
            <div className="col-6">
              <div className="card-problemas">
                <h3>Lentidão e erros em tarefas operacionais.</h3>
                <p>Além de executar mais rápido, os robôs conseguem conferir entregas, seguindo padrões de qualidade e compliance.</p>
              </div>
              <div className="card-problemas">
                <h3>Controlicos de demanda operacional</h3>
                <p>Tenho o controle e aumente exponencialmente a escala e capacidade de entrega da sua operação, sem perder qualidade.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 d-flex flex-column justify-content-start align-items-end" style={{background: '#0D8D91'}}>
        <div className="w-100">
          <h2>Soluções sob medida para suas necessidades de negócios</h2>
        </div>
        <div className="conteiner-card d-flex my-5">
          {cards.map( card => 
            <div className="card mx-3">
              <div className="card-body px-5">
                <img src={card.icon} className="mt-3 d-block" alt="Card" />
                <div className="card-title text-left my-3" style={{color: '#000'}}>{card.title}</div>
                <div className="card-text text-left" style={{color: '#000'}}>{card.text}</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="d-flex">
        <div className="p-0 img-depoimento">
          <img src={kelri} alt="Kelri" />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column text-depoimento p-5">
          <div style={{width: '70%'}} className="d-flex align-items-center justify-content-center desc-depoimento mb-5">
            <p>"A aplicação dessas ferramentas na rotina operacional gerou também uma economia para o escritório, permitindo a ampliação de atuação no pais com a entrada de novos clientes sem a necessidade da ampliação de capacite humano.
            Vamos em frente na parceria com a Oystr na busca de novas ferramentas e mais evolução sempre."</p>
          </div>
          <div style={{width: '70%'}} className="d-flex align-items-center justify-content-between">
            <div className="autor-depoimento mx-3">Kelri Molina </div>
            <div className="escritorio-depoimento mx-3">Mascarenhas Barbosa</div>
            <button className="button-depoimento mx-3"> Mais depoimentos </button>
          </div>
        </div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center p-5" style={{background: '#0D8D91'}}>
        <div>
          <h2>Perguntas Frequentes</h2>
          <p>Confira as maiores dúvidas para entregar robôs nas operações.</p>
        </div>
        <div className="d-flex align-items-center my-5">
          <div>
            <ul className="list-perguntas text-left">
              <li>Como funciona?</li>
              <li>Quanto tempo para criar um robô?</li>
              <li>Quais carteiras trabalhamos?</li>
              <li>Como são as integrações?</li>
            </ul>
          </div>
          <div className="card card-perguntas mx-3">
            <div className="card-body ">
              <div className="card-text  text-left" style={{color: '#000'}}>
                Solicite a lista de robôs que temos para suas carteiras. São mais de 400 robôs! Se não encontrar o que precisa, nossa equipe técnica levanta as suas necessidades e desenha o projeto sem custo!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-between align-items-center justify-content-center">
        <div className="p-5 w-50 text-left d-flex justify-content-center align-items-center">
          <div>
            <h2>Vamos fazer seu negócio<br/> crescer, juntos</h2>
            <p>Ligue para nós em <b>+55(41) 9 9235-0918</b></p>
            <button className="bt-contato">Fale conosco</button>
          </div>
        </div>
        <div>
          <img src={fotoEquipe} alt="Equipe Oystr."/>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
