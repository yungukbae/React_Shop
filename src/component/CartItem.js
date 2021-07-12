import React,{useEffect, useState} from 'react';
import Cart from './Cart'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {delcart} from '../action/itemAction'
import {useSelector,useDispatch} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {red} from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    list:{
        marginBottom:'5px',
        marginTop:'5px'
    },
    grid:{
        background:'#fff',
        paddingTop:'5px',
    }
}));


const CartItem = ({data,index}) => {

    
    const classes = useStyles();
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({
        collection:`users/${uid}/cart`,
        storeAs:"cart"
    })
    const cart = useSelector((state) => state.firestore.data.cart)
    const [list, setList] = useState([])
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => { 

            setList([])
            if(cart){
                for(let key of Object.keys(cart)){
                    if(cart[key] === null) continue;
                    setList((list) => [...list,key])
                    if(key === data.id){
                        setHeart(true)
                    }
                }
            }
    }, [cart])

    const handlebench = () => {
        // console.log('uid:',uid,' id:',id)
        if(cart){
            // console.log('on list')
            for(let item of Object.keys(list)){
                console.log(item,list[item])
                if(data.id === list[item]){
                    console.log('same',list[item])
                    dispatch(delcart(list[item],uid))
                    setHeart(false)
                    break;
            }
        }
    }

    }



    return(
        <>
    { heart && 
            <Grid container className={classes.list}>
            <Grid item xs={2}></Grid>
                        <Grid item xs={2} className={classes.grid}>
                            {/* <Paper className={classes.paper}>Title:{data.title}<tb/> Price:{data.price} Auction day:{new Date(data.date.seconds * 1000).toLocaleDateString()}</Paper> */}
                            <div style={{margin:'0 auto',textAlign:'center'}}><img src={data.data().img} style={{maxHeight:'100px',borderRadius:'5px'}}></img></div>
                        </Grid>
                        <Grid item xs={4} className={classes.grid}>
                            <div style={{textAlign:'center',height:'100px',lineHeight:'100px',}}>Title:{data.data().title} Price:{data.data().price} Auction day:{new Date(data.data().date.seconds * 1000).toLocaleString()}</div>
                        </Grid>
                        <Grid item xs={2} className={classes.grid}>
                        <div style={{width:'50px',height:'100px',lineHeight:'100px',margin:'0 auto'}}>
                            <IconButton aria-label="delete" onClick={handlebench}>
                            <DeleteIcon/> 
                            </IconButton>
                        </div>
                        </Grid>
            <Grid item xs={2}></Grid>
            </Grid>}

        </>
    )
}

export default CartItem