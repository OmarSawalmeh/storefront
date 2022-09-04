import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge'
import { NavLink } from 'react-bootstrap'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useSelector } from 'react-redux'


function Header() {

  const getdata = useSelector((state) => state.cartreducer);
  console.log(getdata);



   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
     setAnchorEl(null)
   }


  return (
    <>
      <Navbar bg='dark' variant='dark' style={{ height: '60px' }}>
        <Container>
          <NavLink to='/' className='text-decropation-none text-light mx-3'>
            Add to cart
          </NavLink>
          <Nav className='me-auto'>
            <NavLink to='/' className='text-decropation-none text-light'>
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={4}
            color='primary'
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i
              className='fa-sharp fa-solid fa-cart-shopping text-light'
              style={{ fontSize: 25, cursor: 'pointer' }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div
            className='card_details d-flex justify-content-center align-items-center'
            style={{ width: '24rem', padding: 10, position: 'relative' }}
          >
            <i
              className='fas fa-close smallclose'
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: 'pointer',
              }}
            ></i>
            <p
              style={{
                fontSize: 23,
              }}
            >
              Your Card is Empty
            </p>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHNj9PK7N9WLGXRF5FDbA7XdtjH6caLiwnBW2__PWC3crRyS_XiocBVKnP9GONqvVp9A&usqp=CAU'
              alt=''
              className='emptycart_img'
              style={{ width: '10rem', padding: 10 }}
            />
          </div>
        </Menu>
      </Navbar>
    </>
  )
}

export default Header