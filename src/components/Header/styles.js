import styled from "styled-components"


export const MainHeader = styled.div`
  position: fixed;
  width: 100%;
  display: flex !important;
  height: 15vh;
  align-items: center;
  margin: auto;
  top: 0;
  margin-bottom: 5%;
  background: rgb(5, 141, 84);
  color: white;
  z-index: 1;
`

export const Brand = styled.div`
  position: relative;
  left: 5%;

`

export const Menu = styled.div`
  position: absolute;
  right: 5%;
  width: 40%;

  ul {
    display: flex;
    justify-content: space-between;
    color: white!important;
  }

  // ul>a> {
  //   text-decoration: none;
  //   color: black;
  //   font-size: 15px;
  //   font-weight: 500;
  //   color: white;
  // }
`