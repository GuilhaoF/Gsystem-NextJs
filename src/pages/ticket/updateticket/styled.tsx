import styled from "styled-components";

export const TicketFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 250px;

`

export const TicketUpdateForm = styled.div`
    display: flex;
    width: 760px;
    max-width: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

    h1{
      color: #2d2d2d;
    }

    input{
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: block;
    width: 350px;
    background: #fcfcfc;
    height: 50px;
    border-radius: 25px;
    padding-left: 26px;
    margin-bottom: 10px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .ticket-description{
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .select-status-ticket{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:'center';
    width: 350px;
    height: 50px;
    border: 0;
    padding-left:16px;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 25px;
    margin-bottom: 10px;
   
  }

`


export const TicketButtons = styled.div`

   display: flex;
   justify-content: center;
   gap: 10px;
   width: 350px;

  .update-ticket{
    font-size: 10px;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
    width: 50%;
    height: 50px;
    border-radius: 25px;
    background: #8bb8a2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    outline: none!important;
    border: none;
    margin-top : 8px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  .back{
    
    font-size: 10px;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
    width: 50%;
    height: 50px;
    border-radius: 25px;
    background: #4c4e8d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    outline: none!important;
    border: none;
    margin-top : 8px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

`