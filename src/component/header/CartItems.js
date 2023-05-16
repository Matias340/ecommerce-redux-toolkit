import React from "react"

export const CartItems = ({ id, name }) => {
  
  return (
    <>
      <div className='cardList' key={id}>
        <div className='cartContent'>
          <div className='img'>
            <button className='remove flexCenter'>
              cerrar
            </button>
          </div>
          <div className='details'>
            <p>{name}</p>
            <label htmlFor=''>Unit Price $ 10</label>

            <div className='price'>
              <div className='qty flexCenter'>
                <button className='plus'>
                  +
                </button>
                <button className='num'>1</button>
                <button className='minus'>
                  -
                </button>
              </div>
              <div className='priceTitle'>$ 10</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}