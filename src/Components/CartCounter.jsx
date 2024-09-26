import React, { useState }from 'react'

const CartCounter = () => {
    const [cartCount, setCartCount]= useState(0);

    const handleAddToCart= ()=>{
        setCartCount(cartCount + 1);
    }
  return (
    <div>
        <i className='fas fa-shopping-cart'> {cartCount > 0 && <span className='notification'>{cartCount}</span>}</i>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default CartCounter
