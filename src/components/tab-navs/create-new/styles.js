import styled from "styled-components"

export const BodyDiv = styled.div`

@media (max-width: 600px) {
  width: 90vw;
  padding: 0px;
  margin: 0px;
  // background: red;
  margin-left: -50px;

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}

  width: 80%;
  height: 70vh;
  background: white;
  padding: 25px;
  margin: auto;
  margin-top: 5%;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const FormDiv = styled.div`

@media (max-width: 600px) {
  form {
    flex-direction: column;
  }

  div.input {
    width: 90% !important;
    margin: 0 !important;
    margin-top: 10px !important;
    margin-bottom: 5px !important;
    // border: 1px solid black;
  }

  div.input>input {
    width: 100%;
    height: 60px !important;
    border-radius: 5px;
    // border-style: solid;
  }

  div.input>textarea {
    width: 100%;
    height: 60px !important;
  }

  div.input>div {
    font-size: 20px;
  }

  button.submit {
    width: 120px !important;
    height: 60px !important;
    margin-top: 20px;
  }
}

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    // border: 1px solid blue;
    // background: #dbe1e2;
    // background: black;
  }


  div.input {
    // background: green;
    margin: 3%;
    width: 40%;
    // padding: 10px;
  }

  div.input>input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border-style: solid;
    border: 2px rgb(5, 141, 84) solid;
  }

  div.input>div {
    // color: bl;
  }

  div.input>textarea {
    width: 100%;
    height: 50px;
    border: rgb(5, 141, 84) 2px solid;
  }

  button.submit {
    background: rgb(5, 141, 84);
    width: 80px;
    height: 40px;
    color: white;
    border: none;
  }

`