import React from 'react'

const Categories = ({ filterItem, categories }) => {
  return (
    <div
      className='btn-container'
      style={{
        marginBottom: '0rem'
      }}
    >
      {categories.map((category, idx) => {
        return (
          <button
            type='button'
            key={idx}
            className='filter-btn'
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
