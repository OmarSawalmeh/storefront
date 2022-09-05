import React from 'react'
import Button from 'react-bootstrap/Button'
//import Cardsdata from './CardsData'
import Alldata from './data/data'
import './style.css'
import { useDispatch } from 'react-redux'
import {ADD} from '../redux/action/action'
import Link from '@mui/material/Link'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

function Cards({ items }) {


  const dispatch = useDispatch()

  const send = (e) => {
    dispatch(ADD(e))
  }

  return (
      <div className='section-center'>
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem
          return (
            <article
              key={id}
              className='menu-item'
              style={{
                marginTop: '1rem',
                marginLeft: '4rem',
                marginBottom: '5rem',
              }}
            >
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <Button
                  variant='dark'
                  className='col-lg-12'
                  onClick={() => send(menuItem)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant='info'
                  className='col-lg-12'
                  style={{ marginTop: '1rem' }}
                >
                  <Link
                    component={RouterLink}
                    to={`/cart/select/${id}`}
                    className='text-decropation-none text-light'
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </article>
          )
        })}
      </div>
  )
}

export default Cards

    {
      /* <div className='row d-flex justify-content-center align-items-center'>
         {
            data.map((element, id)=>{
               return (
                 <>
                   <Card
                     style={{ width: '22rem', border: 'none' }}
                     className='mx-2 mt-4 card_style'
                   >
                     <Card.Img
                       variant='top'
                       src={element.img}
                       style={{ height: '16rem' }}
                       className='mt-3'
                     />
                     <Card.Body>
                       <Card.Title>{element.title}</Card.Title>
                       <Card.Text>Price: $ {element.price}</Card.Text>
                       <div className='button_div d-flex justify-content-center'>
                         <Button
                           variant='primary'
                           className='col-lg-12'
                           onClick={() => send(element)}
                         >
                           Add to Cart
                         </Button>
                       </div>
                     </Card.Body>
                   </Card>
                 </>
               )
            })
         }
      </div> */
    }