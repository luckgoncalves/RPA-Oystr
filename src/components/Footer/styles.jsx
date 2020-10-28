import styled from 'styled-components'

export const Container = styled.div`
  background: #0D8D90;
  color: #fff;

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

        color: #E5E5E5;
        padding: 0.3rem 0;
      }
    }

    .redes-sociais {
      margin: 0;
      img {
        margin: 0 1rem 0 0;
      }
    }
  }
`;