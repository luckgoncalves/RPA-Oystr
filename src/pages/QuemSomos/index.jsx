import React from 'react';

import { Container, CardTeam, CardTeamMobile } from './styles';

function QuemSomos() {
  const team = [
    {
      name: "Rafael Caillet", 
      function: "CEO", 
      text: "CEO da Oystr, referência em automações com robôs para o meio jurídico(RPA). Graduando em Administração, com MBA em Sistemas de Informação pela PUC-PR. Atuando desde 2001 na área jurídica possui experiência com advocacia de massa, sistemas de gestão, automação de fluxos de trabalho, gestão de equipes e consultoria. Empreendedor desde 2016, com a Oystr conseguiu colocar em prática projetos e metodologias que tinha idealizado contribuindo para a advocacia do futuro!", 
      image: require('../../assets/img/caillet.svg').default
    },
    {
      name: "Jonas Pacheco", 
      function: "CTO", 
      text: "Graduado em Sistemas da Informação. 17 anos de experiência como programador em linguagens C-based (C, C++, C#, Java). Arquiteto/desenvolvedor de software full stack. Vasta experiência em gestão de times e projetos de software. Mais de 15 anos de experiência analisando, desenvolvendo e projetando soluções cliente / servidor e aplicações web. Vasta experiência em empresas de automação de processos.", 
      image: require('../../assets/img/jonas.svg').default
    },
    {
      name: "Leandro Saad", 
      function: "CIO", 
      text: "Empreendedor e professor, graduado em Ciência da Computação na PUC/SP, com pós-graduação em Tecnologia de Objetos no Senac/SP e cursos de extensão no exterior. Certified Scrum Master desde 2004. 20 anos de experiência em desenvolvimento de software tendo atuado no desenvolvimento de projetos open source, frameworks, aplicações distribuídas e infra-estrutura de dados.10 anos de experiência em liderança de equipes tendo participado de importantes projetos de transformação digital envolvendo engenharia de dados e Inteligência Artificial. Co-Fundador da Oystr Legal Tech e Dogma Data Privacy. Vice-Presidente do Instituto Nacional de Proteção de Dados (iNPD).", 
      image: require('../../assets/img/leandro.svg').default
    },
    {
      name: "Mauricio Kavinski", 
      function: "Advisor", 
      text: "Advogado, mestrado  direto civil na UFPR, pós graduado em Direito Societário pela Universidade Positivo e em direito Regulatório pela FGV. Sócio do escritório Lpbk advogados associadosCEO da Preambulo Tecnologia. Sócio investidor das legaltechs   Oystr, Go4, Acordo Fechado,  contraktor, Startlaw, LaMusic e Probono. Membro da comissão de direto e tecnologia da OAB-Pr.", 
      image: require('../../assets/img/mauricio.svg').default
    },
  ]

  return (
    <Container>
      <div>
        <h1>Sócios</h1>
        <h4>Confiança é a base de qualquer negócio e por isso somos o que somos!</h4>
      </div>

      {team.map( t => 
      <>
        <CardTeam className="d-none d-lg-flex">
          <figure>
            <img src={t.image} alt={t.name} />
          </figure>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <h3>{t.name}</h3>
              <span>{t.function}</span>
            </div>
            <div className="description">
              <p>
                {t.text}
              </p>
            </div>
          </div>
        </CardTeam>
        <CardTeamMobile className="d-flex flex-column d-lg-none">
          <figure>
            <img src={t.image} alt={t.name} />
          </figure>
          <div className="d-flex flex-column mt-5">
            <div className="d-flex align-items-center">
              <h3>{t.name}</h3>
              <span>{t.function}</span>
            </div>
            <div className="description">
              <p>
                {t.text}
              </p>
            </div>
          </div>
        </CardTeamMobile>
        </>
      )}
    </Container>
  );
}

export default QuemSomos;