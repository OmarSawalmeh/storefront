import { useParams } from 'react-router-dom'
import Alldata from './data/data'

function CardsSelect() {

  const { idParam } = useParams()
  //console.log('id params', id);

  console.log('Card Select All data --->', Alldata)



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
            {Alldata.map((element) => {
              const { id, title, category, price, img, desc } = element
              console.log('id', id);
              console.log('id param', idParam);
              return (
                <>
                  {id==idParam?
                  <article key={id} className='menu-item'>
                    <img src={img} alt={title} className='photo' />
                    <div className='item-info'>
                      <header>
                        <h4>{title}</h4>
                        <h4 className='price'>${price}</h4>
                      </header>
                      <p className='item-text'>{desc}</p>
                    </div>
                  </article>
                  :
                  <div></div>}
                </>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsSelect
