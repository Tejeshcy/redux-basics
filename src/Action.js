import axios from 'axios';


export const getProductAction = () => dispatch => {
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
        
        dispatch({
            type: "PRODUCT_LIST",
            payload: res.data
        })
    })
}

export const getUserAction = () => dispatch => {
    axios.get("https://fakestoreapi.com/products")
    .then (res =>{
        console.log(res.data)
        dispatch({
            type: "USER_LIST",
            payload: res.data
        })
    })
}