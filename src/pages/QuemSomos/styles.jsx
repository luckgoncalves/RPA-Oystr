import styled from 'styled-components'

export const Container = styled.div`
  background: #065170;
  padding: 3rem;

  @media(max-width: 990px) {
    padding: 3rem 0;

    & > div:first-child {
      padding: 3rem;
    }
  }

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

export const CardTeamMobile = styled.div`
  display: flex;
  align-items: center;
  max-width: 990px;
  min-height: 231px;

  padding: 0 1.5rem 1.5rem 1.5rem;
  margin: 10rem 10px 13rem 10px;
  &:last-child {
    margin: 10rem 10px 0 10px;

  }

  background: #146181;
  border-radius: 42px;

  figure {
    width: 222.27px;
    margin: -23% 0 0 0;
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