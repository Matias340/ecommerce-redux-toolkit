import React, { useState } from "react"
import { CartItems } from "./CartItems"
import { useSelector } from "react-redux"

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false)
  const closeCard = () => {
    setCardOpen(null)
  }

  const cartItems = useSelector((state) => state.cart.itemsList)

  return (
    <>
      <div className='card' onClick={() => setCardOpen(!cardOpen)}>
        <button className='cardIcon' />
        <span className='flexCenter'>10</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            cerrar
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems id={item.id} cover={item.cover} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
        ))}

        <div className='checkOut'>
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor=''>$ 10</label>
          </button>
        </div>
      </div>
    </>
  )
}