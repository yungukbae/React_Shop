import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import IconButton from '@material-ui/core/IconButton';
import './ItemForm.css'
import { Link,withRouter } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {red} from '@material-ui/core/colors'
import {addcart, delcart} from '../action/itemAction'
import { zhCN } from 'date-fns/locale';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const AddCart = ({id}) => {

    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({
        collection:`users/${uid}/cart`,
        storeAs:"cart"
    })
    const cart = useSelector((state) => state.firestore.data.cart)
    const [list, setList] = useState([])
    const [heart, setHeart] = useState(false)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => { 

        
            setList([])
            if(cart && uid){
                for(let key of Object.keys(cart)){
                    if(cart[key] === null) continue;
                    setList((list) => [...list,key])
                    if(key === id){
                        setHeart(true)
                    }
                }
            }
        

    }, [cart])

    const handlebench = () => {
        // console.log('uid:',uid,' id:',id)
        if(!uid){
            setOpen(true)
        }else{
        if(cart){
            // console.log('on list')
            for(let item of Object.keys(list)){
                console.log(item,list[item])
                if(id === list[item]){
                    console.log('same',list[item])
                    dispatch(delcart(list[item],uid))
                    setHeart(false)
                    setOpen2(false)
                    setOpen3(true)
                    break;
                }else if(list.length-1 === Number(item)){
                    dispatch(addcart(id,uid))
                    setOpen3(false)
                    setHeart(true)
                    setOpen2(true)
                }
                //  console.log(list.length-1, Number(item))
                

            }
        }else{
            // console.log('no list')
            dispatch(addcart(id,uid))
            setHeart(true)
            setOpen2(true)
            setOpen3(false)
        }
    }
    
        
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setOpen2(false);
        setOpen3(false)
      };

    return(
        <>
        <IconButton aria-label="add to favorites" onClick={handlebench}>
        {   heart ? <FavoriteIcon style={{ color:red[500]}}/> : <FavoriteIcon/> }
        </IconButton>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                You are not logged in.
            </MuiAlert>
        </Snackbar>

        <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                Cart: Add Item.
            </MuiAlert>
        </Snackbar>


        <Snackbar open={open3} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="warning">
                Cart: Remove Item.
            </MuiAlert>
        </Snackbar>

        </>
    )
}

export default AddCart;