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
`

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  // height: 100vh;

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

  
`