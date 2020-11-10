import styled from 'styled-components'

export const Container = styled.div`
  background: #065170;
  padding: 3rem;

  h1 {
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;

    text-align: center;

    color: #FFFFFF;
  }

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: #E5E5E5;
  }
`;

export const CardTeam = styled.div`
  display: flex;
  align-items: center;
  max-width: 1600px;

  padding: 0 3rem 0 0;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  background: #146181;
  border-radius: 202px;

  figure {
    width: 222.27px;
    margin: 0 3rem 0 0;
  }

  h3 {
    margin: 0 1.5rem 0 0;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #24CCD0;
  }

  span {
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
  }

  .description {
    margin-top: 1.5rem;
    text-align: left;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    color: #E5E5E5;
  }
`;