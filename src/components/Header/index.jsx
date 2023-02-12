import { Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Brand, MainHeader, Menu, MobileNav } from './styles'

export default function Header() {

  const [login, setLogin] = useState()
  const [name, setName] = useState("")



  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    axios.get("customer/me", config)
      .then(res => {
        console.log(res.data)
        setLogin({
          login: res.data
        })
        setName(res.data.firstname)
        console.log(login)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  function logout() {
    localStorage.removeItem("token")
    setTimeout(() => {
      window.location = "/login"
    }, 3000)
  }

 

  {
    if (login) {
      return (
        <div>
          <MainHeader>

            <Brand>
              <h1>Brand</h1>
            </Brand>
            <Menu>
              <ul>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>Product</Link>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Hi { name }</Link>
                {/* <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>{ name }</Link> */}
                <button className='logout' onClick={logout}>Logout</button>
              </ul>
            </Menu>

          </MainHeader>

          <MobileNav>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
              <div id="sidebarMenu">
                <div className="sidebarMenuMain">
                  <ul className="sidebarMenuInner">
                    <li>
                      <Link to='/'>Home</Link>
                    </li>

                    <li>
                      <Link to="/products">Product</Link>
                    </li>

                    <li>
                      <Link to="/dashboard">Hi { name }</Link>
                    </li>

                    <li>
                      <button className="logout" onClick={logout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
          </MobileNav>
        </div>
      )
    } else {
      return(
        <div>
          <MainHeader>

            <Brand>
              <h1>Brand</h1>
            </Brand>
            <Menu>
              <ul>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>Product</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                {/* <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link> */}
              </ul>
            </Menu>

          </MainHeader>

          <MobileNav>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
              <div className="sidebarMenuMain">
                <ul className="sidebarMenuInner">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>

                  <li>
                    <Link to="/products">Products</Link>
                  </li>

                  <li>
                    <Link to="/register">Register</Link>
                  </li>

                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </MobileNav>
        </div>
      )
    }      
  }
}
