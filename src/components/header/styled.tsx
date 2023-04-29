import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-left: 250px;

    
  @media (max-width: 700px) {
    text-align: center;
    margin-left: 0;
  }
`
export const HeaderContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  height: 80px;
  background-color: #dcdddf;
  border-bottom: 1px solid #000;

  button{
    font-weight: bold;
    line-height: 1.5;
    color: #f2f2f2;
    text-transform: uppercase;
    border: 0;
    border-radius: 25px;
    background: #ff5545 ;
    padding: 10px 25px;
    outline: none!important;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

`