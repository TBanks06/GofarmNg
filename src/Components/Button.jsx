import React, { useState }from 'react'
import "./Button.css"


const Button = () => {
  const [cartCount, setCartCount]= useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }
  return (
    <div className='btn-1'>
        <button onclick={handleAddToCart}><a href="">Add to cart</a> </button>
      
    </div>
  )
}

export default Button
