import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ADD, DLT, REMOVE } from '../redux/action/action'

function CardsDetalis() {

  const [data, setData] = useState([]);
  //console.log('Compare Data--->', data);

  const {id} = useParams();
  // console.log('id params', id);

  const getdata = useSelector((state) => state.cartreducer.carts)
  //console.log('Card Details data --->', getdata)

  const compare = ()=>{
    let compareData = getdata.filter((e)=>{
      return e.id == id;
    });
    setData(compareData)
  }

  useEffect(()=>{
    compare();
  }, [id]);

  // to redirect page
  const history = useNavigate();

  const dispatch = useDispatch()
  // Add Item
  const send = (e) => {
    dispatch(ADD(e))
  }
  // Remove All
  const dlt = (id) => {
    dispatch(DLT(id))
    history('/')
  }
  // Remove One Item
  const remove = (item) => {
    // dispatch(DLT(item.id))
    // dispatch(REMOVE(item))
  }
  
  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Iteams Details Page</h2>

        <section
          className='container mt-3'
          style={{
            paddingBottom: '10rem',
          }}
        >
          <div className='iteamsdetails'>
            {
              data.map((element)=>{
                const { id, title, category, price, img, desc, qnty } = element;
                return (
                  <>
                    <article key={id} className='menu-item'>
                      <img src={img} alt={title} className='photo' />
                      <div className='item-info'>
                        <header>
                          <h4>{title}</h4>
                          <h4 className='price'>${price}</h4>
                        </header>
                        <p className='item-text'>{desc}</p>
                        <div>
                          <tr>
                            <td>
                              <strong>Total </strong>${price*qnty}
                            </td>
                            <td
                              style={{
                                color: 'red',
                                fontSize: 20,
                                cursor: 'pointer',
                                paddingLeft: '16.5rem',
                              }}
                              onClick={() => {
                                dlt(id)
                              }}
                            >
                              <i className='fas fa-trash'></i>
                            </td>
                          </tr>
                        </div>
                        <div
                          className='mt-5 d-flex justify-content-between align-items-center'
                          style={{
                            width: 100,
                            cursor: 'pointer',
                            background: '#ddd',
                            color: '#111',
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => remove(element)}
                          >
                            -
                          </span>
                          <span style={{ fontSize: 20 }}>{qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(element)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </article>
                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetalis