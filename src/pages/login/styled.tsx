import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 margin: 0  auto;

`
export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #1e1e1e;

`
export const WrapLoginContainer = styled.div`
    width: 960px;
    background: #dcdddf;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px 113px 109px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
export const FormLoginContainer = styled.div`
  width: 290px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  span{
    font-size: 24px;
    color: #2d2d2d;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
     
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
export const ImageLoginContainer = styled.div`
 width: 316px;

 img{
  max-width: 100%;
 }
 @media(max-width: 992px) {
   width: 35%;
 }
 @media(max-width: 768px) {
  display: none;
 }
 
`
export const FooterLogin = styled.div`
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
