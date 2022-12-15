import { createSlice } from ' @reduxjs/toolkit';
// import { act } from 'react-dom/test-utils';

    const localCart = JSON.parse(localStorage.getItem('cart')) || [];

    const intialState = {
        cart: localCart,
        amount: 0,
        total: 0,
    };

    const cartSlice = createSlice({
        name: 'cart',
        intialState, 
        reducers: {
            addItemToCart: (state, action) => {
                const newItem = action.payload;
                let itemAlreadyExists = false;
                let tempCart = state.cart;

                state.cart.forEach((item) => {
                    if (item.id === newItem.id) {
                        itemAlreadyExists = true
                    }
                });

                if (itemAlreadyExists) {
                    tempCart.map((item) => {
                        if(item.id === newItem.id) {

                            item.amount += newItem.amount
                        }
                            return item;
                    });
                } else {
                    tempCart.push(newItem)
                }

                state.cart = tempCart;
                localStorage.setItem('cart', JSON.stringify(state.cart))
            },

                clearCart: (state) => {
                    state.cart =[];
                    localStorage.removeItem('cart');
                },

                deleteItem: (state, action) => {
                    state.cart = state.cart.filter ((item) => item.id !== action.payload);
                    localStorage.setItem('cart', JSON.stringify(state.cart));

                },

                incItemAmount: (state, action) => {
                    state.cart.map((item) => {
                        if(item.id === action.payload) {
                            item.amount += 1;
                        }
                        return item;
                    });
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }, 
                
                decItemAmount: (state, action) => {
                    state.cart.map((item) => {
                        if (item.id === action.payload) {
                            item.amount -=1;
                        }
                        return item;
                    });
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                }, 

                toggleCartInfo: (state) => {
                    const { amount, total } = state.cart.reduce(
                        (acc, curr) => {
                            acc.amount += curr.amount;
                            acc.total += curr.amount * curr.price;
                            return act;
                        }, 
                        { amount: 0, total: 0 }
                    );
                        
                    state.amount = amount;
                    state.total = total;
                }


        }
    });

    export const {
        addItemToCart,
        clearCart,
        deleteItem,
        incItemAmount,
        decItemAmount,
        toggleCartInfo, 
    
    } = cartSlice.actions;

    export default cartSlice.reducer;


