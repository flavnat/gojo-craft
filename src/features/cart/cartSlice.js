import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],        // Array to store cart items
    totalQuantity: 0, // Total number of items
    totalAmount: 0,   // Total cost of all items
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            
            if (!existingItem) {
                // FIX: Add new item to cart instead of returning
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                })
            } else {
                return
            }
            
            state.totalQuantity += 1
            state.totalAmount += newItem.price
        },
        
        removeFromCart: (state, action) => {
            const itemId = action.payload
            const existingItem = state.items.find(item => item.id === itemId)
            
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity
                state.totalAmount -= existingItem.total
                state.items = state.items.filter(item => item.id !== itemId)
            }
        },

        increaseQuantity: (state, action) => {
            const itemId = action.payload
            const existingItem = state.items.find(item => item.id === itemId)
            
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.total += existingItem.price
                state.totalQuantity += 1
                state.totalAmount += existingItem.price
            }
        },
        
        decreaseQuantity: (state, action) => {
            const itemId = action.payload
            const existingItem = state.items.find(item => item.id === itemId)
            
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1
                existingItem.total -= existingItem.price
                state.totalQuantity -= 1
                state.totalAmount -= existingItem.price
            }
        },
        
        clearCart: (state) => {
            state.items = []
            state.totalQuantity = 0
            state.totalAmount = 0
        }
    },
})

// Export actions
export const { 
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart 
} = cartSlice.actions

// Selector helpers
export const selectCartItems = (state) => state.cart.items
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity
export const selectCartTotalAmount = (state) => state.cart.totalAmount

export default cartSlice.reducer