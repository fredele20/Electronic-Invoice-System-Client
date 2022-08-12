import styled from "styled-components"

export const MainBody = styled.div`

  h1 {
    display: flex;
    margin: auto;
    margin-top: 12%;
    justify-content: center;
  }

  div {
    
  }
`

export const CardDiv = styled.div`
  // border: solid red 1px;
  display:flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`


export const Card = styled.div`

// border: green 1px solid;

  margin-right: -5%;
  // background: rgb(5, 141, 84);

  
  button {
    width: 40%;
    height: 50px;
    background: rgb(5, 141, 84);
    border: none;
    color: white;
    margin-left: 70px !important;
  }

  img {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
`