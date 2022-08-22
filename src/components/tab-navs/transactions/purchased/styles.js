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


  div {
    width: 100%;
  }

`

export const StyledDiv = styled.div`
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