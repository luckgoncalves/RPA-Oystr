import Header from './components/Header'
import Footer from './components/Footer'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import bots from './assets/img/Frame.svg'
import kelri from './assets/img/kelri.svg'
import fotoEquipe from './assets/img/foto-equipe.svg'
import fotoOystr from './assets/img/foto-oystr.svg'
import './App.css';

function App() {
  const cards = [
    {icon: '', title: 'Baixo investimento', text: 'Modelo simples de cobrança, sem multas de contrato e de rápido retorno.'},
    {icon: '', title: 'Sem trauma de implantação', text: 'Robôs rodando na sua empresa em até 6 semanas.'},
    {icon: '', title: 'Melhore a experiência dos seus colaboradores', text: 'Analistas devem analisar. Coordenadores devem coordenar e gerentes devem gerenciar. Tarefas repetitivas ficam com nossos robôs.'},
    {icon: '', title: 'Controle seus robôs', text: 'Gerencie seus robôs em nossa plataforma.'},
  ]
  return (
    <div className="App">
      <Header />
      <section className="d-flex justify-content-between align-items-center">
        <div>
          <h2>Robos inteligentes para multiplicar a produtividade da sua empresa</h2>
          <p>Integre seus sistemas, acabe com o retrabalho e escale seu negócio!</p>
          <button className="button-agenda">Agendar demonstração</button>
        </div>
        <div>
          <img src={fotoOystr} alt="Equipe"/>
        </div>

      </section>
      <section className="my-5">
        <h2>Quais problemas nossos robôs resolvem</h2>
        <div className="d-flex m-5">

          <div>
            <img src={bots}  alt="Bots"/>
          </div>
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
      </section>
      <section>
        <h2>Soluções sob medida para suas necessidades de negócios</h2>
        {cards.map( card => 
          <div className="card">
            <img src="/assets/318x180.svg" alt="Card" />
            <div className="card-body">
              <div className="card-title" style={{color: '#000'}}>{card.title}</div>
              <div className="card-text" style={{color: '#000'}}>{card.text}</div>
            </div>
          </div>
        )}
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
      <section className="p-5">
        <h2>Perguntas Frequentes</h2>
        <p>Confira as maiores dúvidas para entregar robôs nas operações.</p>
      </section>
      <section className="d-flex justify-content-between align-items-center justify-content-center">
        <div className="p-5 w-50 text-left">
          <h2>Vamos fazer seu negócio crescer, juntos</h2>
          <p>Ligue para nós em <b>+55(41) 9 9235-0918</b></p>
          <button className="bt-contato">Fale conosco</button>
        </div>
        <div>
          <img src={fotoEquipe} alt="Equipe Oystr."/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
