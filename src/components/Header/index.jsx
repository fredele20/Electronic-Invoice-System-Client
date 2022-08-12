import { Link } from '@reach/router'
import React from 'react'
import { Brand, MainHeader, Menu } from './styles'

export default function Header() {
  return (
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
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
        </ul>
      </Menu>

    </MainHeader>
  )
}
