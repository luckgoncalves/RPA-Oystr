import styled from 'styled-components'

export const Contact = styled.section`
 h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;

  margin-bottom: 1.5rem !important;
  color: #E5E5E5;
 }

 p { 
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;

  margin-bottom: 3rem;
  color: #E5E5E5;
 }

 a { 
  width: 306px;
  height: 68px;
  padding: 1rem;

  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    /* color: #fff;
    text-decoration: none; */
  }
 }

 @media (max-width: 1040px) {
   p {
    margin-bottom: 1.5rem;
   }

   figure {
     width: 100%;
     span{
      width: 100%;
      img {
       width: 100%
      }
     }
   }
 }
`;

export const Testmonials = styled.section`
  margin: auto;
  .footer-depoimento, .desc-depoimento{
    width: 70%;

    @media(max-width: 1200px){
      width: 100%;
    }
  }

  .button-depoimento {
    min-width: 172px;
  }

  @media (min-width: 990px) and (max-width: 1230px){
    .desc-depoimento {
      p {
        font-size: 19px;
      }
    }
  }

  @media (min-width: 120px) {
    .img-depoimento {
      span {
        width: 100%;
        img { 
          width: 100%;
        }
      }
    }
  }
`;

export const Bots = styled.section`

 & > div:first-child {
   @media (max-width: 991px) {
     width:70vw;
   }
 }
`;

export const CardQuestions = styled.div`
  margin-left: 0;

  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #252525;


  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    
    .card-text { 
      font-weight: normal;
      font-size: 22px;
      line-height: 26px;
    
      color: #535353;
    }
  }
`;