import styled from "styled-components"

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  // border: 1px solid green;
  width: 80%;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3%;

  @media (max-width: 600px) {
    width: 90vw;
    position: absolute;
    right: 3%;
    top: -5%;
    font-size: 12px;
  }


  div {
    width: 100%;
  }

`

export const StyledDiv = styled.div`

  @media (max-width: 600px) {
    width: 90vw;
    position: absolute;
    right: 5%;
    top: -2%;
    font-size: 12px;
  }
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  div {
    height: 30px;
  }

  div.invoice {
    width: 100%;
    background: rgb(5, 141, 84);
  }

  div.invoice>a {
    color: white
  }

  div.prodName {
    width: 100%;
    background: #dbe1e2;

  }

  div.sellName {
    width: 100%;
  }
`