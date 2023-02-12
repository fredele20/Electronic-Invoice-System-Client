import styled from "styled-components"

export const HomeContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 10%;
  background-color: white;
  color: black;

  div.info {
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
  }

  div.info button {
    border: none;
    height: 50px;
    width 100px;
    margin: 0 40px;
  }

  div.info button.register {
    background: black;
    color: white
  }

  div.info button.login {
    background: rgb(5, 141, 84);
    color: white
  }

  @media (max-width: 500px){
    body {
      width: 100vw;
      background: red;
    }
    // h1 {
    //   font-size: 40px !important;
    //   width: 100%;
    // }
  }

`

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  h1 {
    font-size: 80px;
    width: 50%;
    // border: solid 1px red;
    text-align: center;
    margin-top: 15vh;
  }

  span {
    font-size: 130px;
    color: rgb(5, 141, 84);
  }

  @media (max-width: 500px) {
    h1 {
      // margin: auto;
      margin-top: 50%;
      font-size: 70px;
      width: 80%;
      margin-bottom: 80px;
    }
    span {
      font-size: 80px;
    }
  }

  
`