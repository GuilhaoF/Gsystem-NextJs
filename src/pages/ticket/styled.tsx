import styled from "styled-components";



export const ContainerMainList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top : 30px;
  margin-left: 250px;

`
export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`
export const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background:lavender;
  margin-top: 5px;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  h2{
    font-size: 16px;
  }
  span{
    word-break:break-all;
  }

  p{
    border: 1px solid red;
    padding: 6px;
    border-radius: 2px;
    color: red;
  }
  :last-child{
    margin-bottom: 20px;
  }

`