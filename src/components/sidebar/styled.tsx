import styled from "styled-components";

export const SidebarContainer = styled.div`
 margin: 0;
 padding: 0;
 width: 250px;
 background-color: #636c78;
 position: fixed;
 height: 100vh;
 overflow: auto;


 a{
  display: block;
  color: #f2f2f2;
  padding: 30px;
  text-decoration: none;
  border-bottom: 1px solid #fff;

 }


 @media(max-width: 700px) {
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: auto;
  position: relative;

  a{
    float: left;
    width: 150px;
    text-align: center;
  }
 }

 @media(max-width: 400px) {
  a{
    text-align: center;
    float: none;
    width: 150px;
    border: 0;
  }
 }


`