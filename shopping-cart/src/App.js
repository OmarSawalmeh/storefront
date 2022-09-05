import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import CardsDetalis from './components/CardsDetalis';
import CardsSelect from './components/CardSelect';
import Cards from './components/Cards'
import {Routes, Route} from 'react-router-dom'
import React, { useState } from 'react'
import Categories from './components/data/Categories'
import items from './components/data/data'


const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(items)
    } else {
      const newItem = items.filter((item) => item.category === category)
      setMenuItems(newItem)
    }
  }

  return (
    <>
      <Header />
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItem={filterItem} categories={categories} />
      </section>
      <Routes>
        <Route path='/' element={<Cards items={menuItems} />} />
        <Route path='/cart/:id' element={<CardsDetalis />} />
        <Route path='/cart/select/:idParam' element={<CardsSelect />} />
      </Routes>
    </>
  )
}

export default App;
