import styled from "styled-components"

export const ModalDiv = styled.div`

  // width: 80%;
  // background: yellow;

  div.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: fixed;
    z-index: 1;
    left: 25%;
    top: 25%;
    width: 50%;
    height: 60vh;
    background-color: white;
    border: 1px solid grey;
    padding: 5%;
  }

  div.input {
    margin-top: 10px;
  }

  button {
    border: none;
  }

  button.inc-dec {
    border: 1px solid rgb(5, 141, 84);
    border-radius: 5px;
    margin-left: 5px;
    background: white;
    width: 30px;
    font-weight: bold;
  }

  div.prod-button {
    margin: 15px;
    color: white;
  }

  button.buy-product {
    background: rgb(5, 141, 84);
    margin-left: 5px;
    color: white;
  }

  button.cancel {
    background: red;
    margin-right: 5px;    
    color: white;
  }

  p {
    margin-bottom: -5px;
  }
`