import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Navbar

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Link style={{textDecoration:'none'}} to={'/'} className='fw-bolder'>
            <Navbar.Brand style={{color:'white'}} href="#home">
            <i className="fa-solid fa-music me-2"></i>
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header