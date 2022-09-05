import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge'
import { NavLink } from 'react-bootstrap'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import {DLT} from '../redux/action/action'

import Link from '@mui/material/Link'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'


function Header() {

  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);
  const [data, setData] = useState(getdata)
  //console.log('data state', data)
  
  const dispatch = useDispatch();
  const dlt = (id)=>{
    dispatch(DLT(id));
  }

  const total = ()=>{
    let price = 0;
    getdata.map((ele, k)=>{
      price = (ele.price*ele.qnty) + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total();
  }, [total])

  useEffect(()=>{
    setData(getdata)
  }, [getdata]);

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
          <Link
            component={RouterLink}
            to='/'
            className='text-decropation-none text-light mx-3'
          >
            Add to cart
          </Link>
          <Nav className='me-auto'>
            <Link
              component={RouterLink}
              to='/'
              className='text-decropation-none text-light'
            >
              Home
            </Link>
          </Nav>

          <Badge
            badgeContent={getdata.length}
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
          {getdata.length ? (
            <div
              className='card_details'
              style={{ width: '24rem', padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link component={RouterLink} to={`/cart/${e.id}`}>
                              <img
                                src={e.img}
                                alt={e.title}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                  padding: 0,
                                }}
                              />
                            </Link>
                          </td>
                          <td>
                            <p>
                              <strong>{e.title}</strong>
                            </p>
                            <p>
                              <strong>Quntity: </strong>
                              {e.qnty}
                            </p>
                          </td>
                          <td>
                            <p>${e.price}</p>
                            <p
                              style={{
                                color: 'red',
                                fontSize: 20,
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                dlt(e.id)
                              }}
                            >
                              <i className='fas fa-trash'></i>
                            </p>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                  <p>
                    <strong>Total: </strong>${price}
                  </p>
                </tbody>
              </Table>
            </div>
          ) : (
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
          )}
        </Menu>
      </Navbar>
    </>
  )
}

export default Header