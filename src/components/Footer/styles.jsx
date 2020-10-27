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

    ul {
      padding: 0;
    }

    .redes-sociais {
      margin: 0;
      img {
        margin: 0 1rem 0 0;
      }
    }
  }
`;