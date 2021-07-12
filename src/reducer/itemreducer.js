import {ADD_ITEM,DEL_ITEM,MOD_ITEM,FETCH_ITEM,ADD_CART,DEL_CART} from '../action/type'

export default function (state={},action){
    switch(action.type){
        case ADD_ITEM:
            return {...state, Add_item: action.payload};
        case DEL_ITEM:
            return {...state, Del_item: action.payload};
        case MOD_ITEM:
            return {...state, Mod_item: action.payload};
        case FETCH_ITEM:
            return {...state, Fetch_item: action.payload};
        case ADD_CART:
            return {...state, Add_cart:action.payload};
        case DEL_CART:
            return {...state, Del_cart:action.payload};
        default:
            return {...state};
    }
}