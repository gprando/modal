import styled, { css } from 'styled-components';


export const BodyModal = styled.div`
  display:flex;
  width:100vw;
  height:100%;
  justify-content:center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  position:fixed;
  z-index:1;
  top:0;
  .janela{
    width:700px;
    background:green;
    border-radius:0.4rem;
    padding: 1.2rem ;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:2;
    >h1{
      font:500 2rem Roboto;
      margin-bottom:4rem;
    }
    
    >svg{
      align-self:flex-end;
      color:white;
      cursor: pointer;
    }
  }
`;
