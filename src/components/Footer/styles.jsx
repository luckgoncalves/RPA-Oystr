import styled from 'styled-components'

export const Container = styled.div`
  background: #0D8D90;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;

  div {
    text-align: left;
    margin: 1.5rem;

    h4 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;

      color: #FFFFFF;
    }

    ul {
      padding: 0;
      margin: 0;

      li {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        cursor: pointer;
        color: #E5E5E5;
        padding: 0.3rem 0;
        
        &:hover {
          text-decoration: underline;
          color: #E5E5E5;
        }
      }
    }

    

    .redes-sociais {
      margin: 1rem 0;
      img {
        margin: 0 1rem 0 0;
      }
    }


    p {
      color: #E5E5E5;
      font-size: 16px;
      line-height: 19px;

      margin-bottom: 0.5rem;
    }
  }
`;