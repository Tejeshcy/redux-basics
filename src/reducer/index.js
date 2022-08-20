import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";



export const reducers = combineReducers({
    Product : ProductReducer,
    user : UserReducer
})