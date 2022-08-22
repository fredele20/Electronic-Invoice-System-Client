import { Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Brand, MainHeader, Menu } from './styles'

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
              <button onClick={logout}>Logout</button>
            </ul>
          </Menu>

        </MainHeader>
      )
    } else {
      return(
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
      )
    }      
  }
}
