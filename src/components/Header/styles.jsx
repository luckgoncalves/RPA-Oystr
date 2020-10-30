import styled from 'styled-components';

export const Container = styled.div`
  background: #06777A;

  .nav-item {
    .nav-link {
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
`;
