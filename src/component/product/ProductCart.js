import React from "react"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"

export const ProductCart = ({ key, id, name, price }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            +
          </button>
        </div>
      </div>
    </>
  )
}