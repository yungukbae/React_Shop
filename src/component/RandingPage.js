
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './RandingPage.css'
import SliderComp from './RandingPageCP/SliderComp'
import ComingAuction from './RandingPageCP/ComingAuction'

import Clock from './RandingPageCP/Clock'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height:'500px',
        lineHeight:'500px',
        fontSize:'30px',
        color: theme.palette.text.secondary,
    },
    itempaper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,   
        height:'300px'
    },
    media: {
        height: 550,
    },
    typotitle:{
        textDecoration:'none'
    }
  }));
  


const RandingPage = () => {

    const classes = useStyles();
    // useFirestoreConnect({
    //     collection:`item`,
    //     orderBy:'date'
    // })
    // const item = useSelector((state) => state.firestore.data.item)
    //1479403139
    //1505755282
    //1542086483
    //1576773970
    //1603378800
    
    
    // const [date, setDate] = useState('')
    
    


    // ["lg","md","sm","xl","xs",false].
    return(
        <>
    <React.Fragment>
      <CssBaseline />
      <div className={"container "+ classes.root}>

            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="main-banner">
                            <SliderComp/>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.papaer}></Paper>
                    </Grid>
                    
                        <Grid item xs={12}>
                            <div style={{
                            marginTop:'16px',
                            height:'100px',
                            fontSize:'2rem',
                            fontWeight:'200',
                            lineHeight:'100px',
                            textAlign:'center',
                            textTransform:'uppercase',
                            background:'#f6f6f6'
                            }}>Upcoming Auctions</div>
                            <div style={{
                                height:'30px',
                                lineHeight:'50px',
                                textAlign:'center',
                                fontSize:'20px'
                            }}><Clock/></div>
                        </Grid>
                        

                    <Grid container spacing={2} style={{
                    padding:'30px',
                    margin:'10px',
                        }}>
    <ComingAuction/>
                        
</Grid>
                </Grid>
            </div>

      </div>
    </React.Fragment>
        
        </>
    )
}

export default RandingPage
