import React, { useState, useRef, useEffect, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {db} from '../config/fbConfig'
import {useFirestoreConnect} from 'react-redux-firebase'
import Card from '@material-ui/core/Card';
import AddCart from './AddCart'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import './ItemForm.css'
import { Link,withRouter } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft:10,
      marginRight:10,
      marginTop:10
    },
    paper: {
        padding: theme.spacing(2),
        height:'100px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mainpaper: {
      padding: theme.spacing(2),
      height:'500px',
      textAlign: 'center',
      color: '#000',
    },
    itempaper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,   
        height:'100px'
    },
    media: {
      height: 450,
    },
    typotitle:{
      textDecoration:'none'
    }
  }));





const ItemForm = withRouter(({location, match,history}) => {

    const classes = useStyles();
    const fetcher = db.collection('item').orderBy('date','desc')
    const [lastItem,setLastitem] = useState('')
    const [loading,setLoading] = useState('')
    const [isEmpty,setIsEmpty] = useState('')
    const [open,setOpen]=useState('')
    const [result, setResult] = useState([])
    const [cartitem, setCartitem] = useState([])
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.firebase.auth);
    
    useFirestoreConnect({
      collection:`users/${uid}/cart`,
      storeAs:"cart"
    })
    
    const cart = useSelector((state) => state.firestore.data.cart)
    


    const target = useRef(null)
    let observer
    const options = {
      root:null,
      rootMargin:'0px',
      threshold:1
    }
    



      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          fetcher.limit(8).get().then((data) => {
            console.log('useEffect: fetch')
            data.docs.forEach((res) => {
              console.log(res.data().title)
              setResult((result) => [...result,res])
              setLastitem(res.data().date)
            })
            setLoading(false)
          })
        }, 1500);
          // observer = new IntersectionObserver(handlecallback, options)
          // observer.observe(target.current)
      },[])


      // const handleshow = () => {
      //   console.log('lastItem',lastItem)
      // }


      // const handlecallback = ([entries]) => {
      //   if(entries.isIntersecting){
      //     setTimeout(() => handleloading(),100)
      //   }
      //   console.log(entries.isIntersecting)
      // }

      const handleloading = () => {
        console.log('more loading')
        // setInter
        setLoading(true)
        setTimeout(() => {
          fetcher.startAfter(lastItem).limit(8).get().then((data) => {
            data.docs.forEach((res) => {
            console.log(res.data().title)
            setResult((result) => [...result,res])
            setLastitem(res.data().date)
          })
          if(data.docs.length === 0){
                  setIsEmpty(true);
                  setOpen(true);
            }
            setLoading(false)
        })
        },1400)
        
      
      }
      const handleClose = (event,reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

      const handlecart = (id) => {

          
        // for(let key of Object.keys(cart)){
        //   let ary = {key:key, value:cart[key]}
        //   if(!ary.value){
        //     console.log('value:null',ary)
        //   }else{
        //     console.log('value:in',ary)
        //   }
          
        // }
        
        
        // .get().then(res => {
        //   console.log(res.id)
        // })
    }


    // useEffect(() => {

    //   fetcher.limit(8).get().then((data) => {
    //     updateState(data)
    //   })
    //   // if(target.current){
    //   //   observer = new IntersectionObserver(callback, options)
    //   //   observer.observe(target.current)
    //   // }
      
    // },[target])

    // // const callback = ([entries]) => {

    // //     if(entries.isIntersecting){

    // //     }
        
    // // }



    // const updateState = (res) => {
    //   res.docs.forEach((que)=>{
    //     const router = que.data()
    //     setResult((result) => [...result,router])
    //     setLastitem(router.date)
    //   })
    //   setLoading(false)
    // }


    // const handleloading = () => {
    //   setLoading(true)
    //   fetcher.startAfter(lastItem).limit(8).get().then((data) => {
    //     if(data.docs.length === 0){
    //       setIsEmpty(true)
    //     }
    //     updateState(data)
    //   })
    // }


   


    return(
        
        <div className={"container "+ classes.root}>

          <Grid container spacing={2}>
          
            {  
              result.map((data,i) => {
              return <Grid item key={i} xs={3}>
                      
                      
                      <Card>
                      <Link to={`/item/${data.id}`} style={{textDecoration:'none', color:'#000'}}>
                        <CardActionArea>
                          <CardMedia className={classes.media} image={data.data().img} title={data.data().title} />
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" className="typotitle">
                            {data.data().title}
                          </Typography>
                            <Typography component="p" className='typotext'>
                              {data.data().content}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                        
                        <AddCart id={data.id}/>
                        {/* <FavoriteIcon onClick={() => handlecart(data.id)} style={{ color:red[500]}}/>
                        <FavoriteIcon onClick={() => handlelist(data.id)}/> */}
                        
                        </CardActions>
                      </Card>
                      
              </Grid>
                
            
            })
            }
            
            {loading && <Grid item xs={12}><div style={{textAlign:'center', height:'100px',lineHeight:'120px',color:"#000"}}>
            <CircularProgress />
            </div>
            </Grid> }
            {/* {isEmpty && <h2>END</h2>} */}
            {/* { !loading && !isEmpty && <button onClick={handleClick}>more</button>} */}
            
            {/* <div ref={target}>target</div> */}
            {/* <Grid item xs={12}><Paper className={classes.paper}><button onClick={handleshow}>more</button></Paper></Grid> */}
            {!loading && !isEmpty && <Grid item xs={12}><div style={{margin:'0px auto', height:'100px',width:'400px',lineHeight:'100px'}}><Button onClick={handleloading} variant="contained" style={{width:'100%',border:'2px solid black'}}>MORE</Button></div></Grid>}
            {isEmpty && <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="No More Item"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />}
        </Grid>
        
      </div>

    )
})

export default ItemForm;

