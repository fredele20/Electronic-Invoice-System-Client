import styled from "styled-components"

export const BodyDiv = styled.div`
  width: 80%;
  height: 70vh;
  background: white;
  margin: auto;
  margin-top: 5%;

  @media (max-width: 600px) {

    background: red;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const MainBody = styled.div`

  h1 {
    display: flex;
    margin: auto;
    margin-top: 5%;
    justify-content: center;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
      display: block
      // margin-right: 20%;
      position: absolute;
      right: 30%;
      // left: 20%;
    }
  }

  div {
    
  }
`

export const CardDiv = styled.div`
  display:flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`


export const Card = styled.div`

@media (max-width: 600px) {

  // background: yellow;
  width: 90vw;
  margin-right 20%;
  margin-top: 25% !important;
}

// border: green 1px solid;

  margin-right: -1%;
  // background: rgb(5, 141, 84);

  div.buttons {
    display: flex;
    justify-content: space-evenly;
  }

  
  button {
    width: 30%;
    height: 50px;
    background: rgb(5, 141, 84);
    border: none;
    color: white;
    // margin-left: 70px !important;
  }

  button.delete {
    background: red;
  }

  img {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
`