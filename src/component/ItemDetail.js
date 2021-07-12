import {useParams} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import {db} from '../config/fbConfig'
import {addcart, delcart} from '../action/itemAction'
import {useDispatch,useSelector} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:'100vh',
      paddingTop:'25vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card:{
        padding:'5px',
        backgroundColor:'#e3e3e3',
        paddingBottom:'0px',
    },
    title:{
        textTransform:'uppercase',
        fontSize:'22px',
        fontWeight:700
    },
    price:{
        fontSize:'18px',
        marginTop:'10px'
    },
    content:{
        marginTop:'10px',
        fontSize:'15px',
        textAlign:'justify',
        lineHeight:1.5,
    },
    time:{
        fontSize:'18px',
        marginTop:'10px'
    },
    alarmbutton:{
        position:'absolute',
        bottom:'12px',
        left:'12px',
        width:'65%'
    },
    cartbutton:{
        position:'absolute',
        bottom:'12px',
        right:'12px',
        width:'30%'
    }
  }));

const ItemDetail = () => {
    const classes = useStyles();
    const {id} = useParams();
    const { uid } = useSelector((state) => state.firebase.auth);
    const [item, setItem] = useState('')
    const [time, setTime] = useState()
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const dispatch = useDispatch()
    const fetch = db.collection('item').doc(id)
    let second
    useEffect(() => {
        
        fetch.get().then((res) => {
            setItem(res.data())
            let ar = new Date(res.data().date.seconds * 1000).toLocaleString()
            // setTime(ar.getYear()+'-'+ar.getMonth()+'-'+ar.getUTCDay())
            setTime(ar)
        })

    }, [])


    const handleClick = () => {
        if(!uid){
            setOpen(true)
        }else{
            setOpen2(true)
            dispatch(addcart(id,uid))
        }
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setOpen2(false);
      };

return(
    <>
        <div className={"container " + classes.root}>

        
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} style={{
                    textAlign:'center',
                    minHeight:'420px',
                }}>
                {/* <img src={item.img} style={{
                        display:'inline-block',
                        
                        borderRadius:'5px',
                }}></img> */}
                <div><img style={{
                    backgroundImage:`url(${item.img})`,
                    backgroundPosition:'center',
                    margin:'0 auto',
                    maxHeight:'55vh',
                    minHeight:'420px',
                    maxWidth:'100%',
                    display:'block',
                    borderRadius:'5px',
                    boxShadow:'1px 1px 3px 1px'
                }} src={item.img}></img></div>
                    
                    
                    
                        
                </Grid>


                <Grid item xs={5} style={{position:'relative',minHeight:'300px'}}>


                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>
                        {item.title}
                        </Typography>
                        <Typography className={classes.price}>
                        $ {item.price}
                        </Typography>
                        <Typography className={classes.content}>
                        <div style={{ maxHeight:'20vh',overflow:'auto'}}>
                        {item.content}
                        </div>
                        </Typography>
                        <Typography className={classes.time}>
                            Auction Day: {time} 
                        </Typography>
                    </CardContent>
                </Card>
                
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.alarmbutton}
                    startIcon={<AlarmIcon />}
                >
                    Add Notification List
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.cartbutton}
                    startIcon={<AddShoppingCartIcon />}
                    onClick={handleClick}
                >
                    ADD Cart
                </Button>

                {/* <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton> */}
                {/* <Paper className={classes.paper}>
                        <h1 style={{
                            textTransform:'uppercase',
                            lineHeight:2,
                        }}>{item.title}</h1>
                        <h3>$ {item.price}</h3>
                        <p style={{
                            marginTop:'15px',
                            marginBottom:'15px',
                            fontSize:'15px',
                            textAlign:'justify'
                        }}>{item.content}</p>
                </Paper>
                <Paper className={classes.paper}>
                    <h2>{ Date(item.date) }</h2>
                </Paper>

                <Grid item xs={4} style={{ position:'absolute',bottom:'12px'}}><Paper className={classes.paper}></Paper></Grid> */}



                </Grid>
                <Grid item xs={1}></Grid>

                

            </Grid>
        </div>

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
    </>
)

}

export default ItemDetail;