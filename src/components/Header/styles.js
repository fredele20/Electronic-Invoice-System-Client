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

  @media (max-width: 600px) {
    height: 10vh;
    z-index: 400;
  }
`

export const Brand = styled.div`
  position: relative;
  left: 5%;

  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
  }

`

export const Menu = styled.div`
  position: absolute;
  right: 5%;
  width: 40%;

  @media (max-width: 600px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    color: white!important;
  }

  button.logout {
    background: white;
    color: rgb(5, 141, 84);
    border: none;
    padding: 5px;
  }

  // ul>a> {
  //   text-decoration: none;
  //   color: black;
  //   font-size: 15px;
  //   font-weight: 500;
  //   color: white;
  // }
`

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 360px) {
    .sidebarIconToggle {
      top: 3% !important;
    }
  }

  @media (max-width: 375px) {
    .sidebarIconToggle {
      top: 3% !important;
    }
  }

  @media (max-width: 600px) {
    display: block;

    #sidebarMenu {
      height: 100%;
      position: fixed;
      width: 100%;
      top: 10%;
      transform: translateY(-1000px);
      transition: transform 250ms ease-in-out;
      background: rgba(0,0,0,0.7);
      z-index: 300;
    }

    .sidebarMenuMain{
      height: 50%;
      position: fixed;
      width: 100%;
      background: rgb(5, 141, 84);
    }

    .sidebarMenuInner {
      margin: 0;
      padding: 70px 0 0 0;
    }

    .sidebarMenuInner li {
      list-style: none;
      color: #fff;
      text-align: center;
      // margin-left: 20px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      // border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .sidebarMenuInner li span {
      display: block;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.50);
    }

    .sidebarMenuInner li a {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }

    input[type="checkbox"]:checked ~ #sidebarMenu { transform: translateX(0); }

    input[type=checkbox] {
      transition: all 0.3s;
      box-sizing: border-box;
      display: none;
    }

    .sidebarIconToggle {
      transition: all 0.3s;
      box-sizing: border-box;
      cursor: pointer;
      position: fixed;
      z-index: 99;
      height: 100%;
      width: 100%;
      top: 30px;
      right: 20px;
      height: 30px; 
      width: 30px;
      // border: 1px solid red;

      z-index: 400;
    }

    .spinner {
      transition: all 0.3s;
      box-sizing: border-box;
      position: absolute;
      top: 10%;
      height: 3px;
      width: 100%;
      background-color: white;
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

    input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      opacity: 0;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(135deg);
      margin-top: 7px;
    }

    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(-135deg);
      margin-top: -11px;
    }
  }
`