import {ADD_ITEM,DEL_ITEM, FETCH_ITEM,MOD_ITEM, ADD_CART,DEL_CART} from './type'

import {db} from '../config/fbConfig'

export const fetchitem = () => {
    let item
    try{
        db.collection('item').orderBy('date','desc').limit(8).get().then((res) => {
            res.docs.forEach((data) => {
                item = ((item) => [...item,data.data()])
            })
        })
        return {
            type:FETCH_ITEM,
            payload:item,
        }
    }catch(error){
        console.log('fetchError',error)
        return error
    }

}

export const addcart = (id,uid) => {
    
    try{
        db.collection('users').doc(uid).collection('cart').doc(id).set({
            addDate: Date.now()
        })
        console.log('additem')
        return{
            type:ADD_CART,
            payload:id
        }

    }catch(error){

        return{
            error
        }
    }

}


export const delcart = (id,uid) => {
    
    try{
        db.collection('users').doc(uid).collection('cart').doc(id).delete()
        console.log('del item')
        return{
            type:DEL_CART,
            payload:id
        }

    }catch(error){

        return{
            error
        }
    }

}