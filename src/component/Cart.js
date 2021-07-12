import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useSelector,useDispatch} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import {db} from '../config/fbConfig'
import CartItem from './CartItem'

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


const Cart = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [item, setItem] = useState([]);
    const [addd, setAddd] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const { uid } = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({
        collection:`users/${uid}/cart`,
        storeAs:"cart"
    })
    const cart = useSelector((state) => state.firestore.data.cart)

    useEffect(() => {
        setItem([])
        //     console.log(cart)
        // console.log(uid)
        if(cart){
            for(let key of Object.keys(cart)){
                // console.log(key,cart[key])
                db.collection('item').doc(key).get().then((res)=>{
                    setItem((item) => [...item,res])
                })
            }
        }else{
            setIsEmpty(true)
        }
        
    }, [cart])

    

return(
        <>
<div className={"container " + classes.root}>

<Grid container>
            
            <Grid item xs={2}></Grid>
                
                <Grid item xs={8}>
                    <Paper className={classes.paper}>list</Paper>
                </Grid>
            
            <Grid item xs={2}></Grid>
            
            {item && item.map((data,index) => {
            return <CartItem data={data} index={index} key={index}/>
            })}
</Grid>
</div>

        </>
    )
}

export default Cart;