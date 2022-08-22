import styled from "styled-components"

export const BodyDiv = styled.div`
  // width: 100%;
  // height: 100vh;
  // margin: auto;
  // display: flex;
  // flex-direction: row-reverse;

  .tab-nav-contain {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    cursor: pointer;
    width: 60%;
    margin: auto;
    margin-top: 2%;
    padding: 0px;
  }

  .tab-nav-contain>li {
    background: #dbe1e2;
    padding: 10px;
    width: 50%;
    text-align: center;
    color: rgb(5, 141, 84);
  }

  .active {
    background: rgb(5, 141, 84) !important;
    color: #dbe1e2 !important;
    animation-name: fadeIn;
    animation-duration: 1000ms;
    animation-timing-function: linear;
  }


  
`