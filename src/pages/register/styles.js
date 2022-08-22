import styled from "styled-components";

export const MainBody = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  // height: 100vh;
  background-color: white;
  color: black;

`;

export const FormDiv = styled.div`
  display: flex;
  // padding: 60px;
  justify-content: center;
  padding-top: 5%;


  input {
    width: 95%;
    height: 40px;
    // margin: auto;
    border: none;
    // border-radius: 10px
    border-bottom: 1px solid rgb(5, 141, 84);
    background: transparent;
    outline: none;
    
  }

  input:focus {
    outline: none;
    color: black;
  }

  .input {
    display: flex;
    align-items: center;
    // justify-content: space-evenly;
    // border: 1px solid green;
    margin: auto;
    margin-left: 10%;
    width: 80%;
    
    margin-top: 15%;
    flex-wrap: wrap;
    
  }

  p {
    color: red;
  }

  .input>* {
    width: 50%;
    justify-content: space-evenly;
    // padding: 10px;
  }


  h1 {
    // display: flex;
    position: absolute;
    right: 50vw;
    top: 20%;
    // justify-content: center;
    padding-bottom: 5%;
  }

  button {
    position: absolute;
    right: 50%;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 50px;
    color: white;
    background: rgb(5, 141, 84);
    margin-top: 20px;
  }
`

export const Button = styled.div`
`