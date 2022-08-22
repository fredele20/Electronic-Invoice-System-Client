import styled from "styled-components"

export const BodyDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;


  .tabIndex {
    // border: 1px solid red;
    position: absolute;
    right: 0;
    left: 18%;
    top: 15%;
    // background: yellow;
    height: 85vh
  }
`

export const SideNav = styled.div`
  position: fixed;
  left: 0;
  background: #dbe1e2;
  height: 100vh;
  width: 18%;
  // margin-top: -7%;

  ul {
    margin-top: 80%;
    margin-left: 15%;
  }

  ul li {
    cursor: pointer;
    margin-top: 15%;
    font-weight: bold;
    list-style-type: none;
  }

  .active {
    color: rgb(5, 141, 84);
    animation-name: fadeIn;
    animation-duration: 1000ms;
    animation-timing-function: linear;
  }

`