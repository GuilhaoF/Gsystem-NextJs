import styled from "styled-components";


interface StatusColorProps{
  status? : string
}

export const EmptyList = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top : 100px;
  margin-left: 250px;
  font-size: 4rem;
  color : #333;

`

export const ContainerMainList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top : 60px;
  margin-left: 250px;

  padding: 20px;


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
  background: #eef2f3;
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
  :last-child{
    margin-bottom: 20px;
  }

`
export const StatusIndicator = styled.div<StatusColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 70px;
    margin: 8px;
    word-break: break-all;
    white-space: break-spaces;
    border: 2px solid;
    padding: 4px;
    border-radius: 10px;
    border-color: ${props => props.status === 'Aberto' ? '#ff3838' : props.status === 'Pendente/Aguardando Peca'? '#ffd32a' :  '#3ae374' };
   

    p{
      color: ${props => props.status === 'Aberto' ? '#ff3838' : props.status === 'Pendente/Aguardando Peca'? '#ffd32a' :  '#3ae374' };
    }

  
`