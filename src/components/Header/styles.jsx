import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.pathname !== '/team' ? '#06777A' : '#065170'} ;
  .navbar-collapse, .collapse {
    @media(max-width: 990px) {
      z-index: 9999;
      padding: 3rem;
      background: ${props => props.pathname !== '/team' ? '#06777A' : '#065170'} ;
    }
  }
  height: 130px;
  margin-bottom: ${props => props.pathname !== '/team' ? '130px' : ''} ;

  .nav-item {
    .nav-link {
      cursor: pointer;
      color: #E5E5E5;
      transition: all .2s ease-in-out;

      &.nav-link:hover {
        color: #FFF !important;
        transform: scale(1.05);
      }

      &.active {
        color: #FFF !important;
      }
      
      font-size: 24px;
      line-height: 29px;
      font-weight: bold;
    }
  }

  @media (max-width: 1366px) {
    margin-bottom: 0;
  }
`;
