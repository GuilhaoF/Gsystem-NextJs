import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 margin: 0  auto;
`
export const RegisterFormContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #808e9b;
`
export const WrapRegisterForm = styled.div`
  
    width: 960px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 121px 24px ;

    @media(max-width: 768px) {
      padding:100px 80px 33px;
    }

    @media (max-width: 992px){
      padding:177px 90px 33px 85px;
    }
    @media(max-width: 576px) {
      padding:100px 15px 33px;
    }
`

export const ImageRegisterContainer = styled.div`
  width: 316px; 

  img{
    max-width: 100%;
  }
  @media(max-width: 992px) {
   width: 45%;
   height: 35%;
   margin-right:1.5rem;
 }
 @media(max-width: 768px) {
  display: none;
 }

`

export const FormGroupContainer = styled.div`
  
  width: 290px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  span{
    font-size: 24px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 54px;
    font-weight:bold;
  }
  input{
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding-left: 26px;
    margin-bottom: 10px;
    border: 0;
    outline: 0;
     
  }
  button{
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    outline: none!important;
    border: none;
    margin-top : 8px;
  }

 @media(max-width: 992px) {
      width: 50%;
 }
 @media(max-width: 768px) {
      width: 100%;
 }

`
export const FooterRegisterForm = styled.footer`
 display: flex;
 justify-content: center;
 align-items: center;

 p{
  font-size: 1.2rem;
  font-weight:bold;
 }

 a{
    margin-left: 4px;
    color: #57b846;
  }

`