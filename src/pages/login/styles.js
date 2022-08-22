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
  // background: rgba(255, 255, 255, 0.1);
  width: 50%;
  // border: 2px solid green;
  margin: auto;
  margin-top: 200px;
  // height: 50vh;
  align-items: center;
  // padding: 60px;
  justify-content: center;


  input {
    width: 500px;
    height: 40px;
    border: none;
    // border-radius: 10px
    border-bottom: 1px solid rgb(5, 141, 84);
    // background: rgb(5, 141, 84);
    // outline: none;
    
  }

  input:focus {
    outline: none;
    color: black;
  }

  button {
    margin-top: 40px;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background: rgb(5, 141, 84);
    color: white;
    align-items: center;  
  }
`