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

  @media (max-width: 600px) {
    display: none;

  }

`

export const MobileSideNav = styled.div`

display: none;

@media (max-width: 600px) {
  display: block;
  position: fixed;
  left: 0;
  top: 15%;
  z-index: 1;
  // background: #dbe1e2;
  height: 100vh;
  width: 18%;
  margin-top: -7%;

  #tabnavMenu {
    height: 100%;
    position: fixed;
    width: 50%;
    top: 10%;
    transform: translateX(-1000px);
    transition: transform 250ms ease-in-out;
    background: rgba(0,0,0,0.7);
    z-index: 300;
  }

  .tabnavMenuMain{
    height: 50%;
    position: fixed;
    width: 100%;
    background: white;
    color: rgb(5, 141, 84);
  }

  .tabnavMenuInner {
    margin: 0;
    padding: 70px 0 0 0;
  }

  .tabnavMenuInner li {
    list-style: none;
    color: rgb(5, 141, 84);
    text-align: center;
    // margin-left: 20px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .tabnavMenuInner li span {
    display: block;
    font-size: 14px;
    color: rgb(5, 141, 84);
  }

  .tabnavMenuInner li a {
    color: rgb(5, 141, 84) !important;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }

  input[type="checkbox"]:checked ~ #tabnavMenu { transform: translateX(0); }

  input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }

  .tabnavIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 99;
    height: 100%;
    width: 100%;
    // top: 30px;
    left: 20px;
    height: 30px; 
    width: 30px;
    // border: 1px solid red;

    z-index: 400;
  }

  // .parent {
  //   display: flex;
  // }

  .spinner {
    transition: all 0.8s;
    box-sizing: border-box;
    position: absolute;
    top: 10%;
    height: 3px;
    font-size: 25px;
    display: flex;
    color: rgb(5, 141, 84);
    width: 100%;
    background-color: rgb(5, 141, 84);
  }

  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
  }

  .diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }

  .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
  }

  input[type=checkbox]:checked ~ .tabnavIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
  }

  input[type=checkbox]:checked ~ .tabnavIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 7px;
  }

  input[type=checkbox]:checked ~ .tabnavIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -11px;
  }
  
`