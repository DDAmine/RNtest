import {ADD_TO_CART, CLEAR_CART , REMOVE_FROM_CART} from '../constants';



export const AddToCart =(payload) =>{
    return {
        type: ADD_TO_CART,
        payload : payload,
    }

}
export const RemoveFromCart =(payload) =>{
    return {
        type: REMOVE_FROM_CART,
        payload : payload,
    }

}
export const ClearCart =() =>{
    return {
        type: CLEAR_CART,
        
    }

}