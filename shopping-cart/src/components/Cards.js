import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import Cardsdata from './CardsData'
import Alldata from './data/data'
import { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import {ADD} from '../redux/action/action'

function Cards({ items }) {
  const [data, setData] = useState(Alldata)

  const dispatch = useDispatch()

  const send = (e) => {
    dispatch(ADD(e))
  }

  return (
      <div className='section-center'>
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
                <Button
                  variant='dark'
                  className='col-lg-12'
                  onClick={() => send(menuItem)}
                >
                  Add to Cart
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