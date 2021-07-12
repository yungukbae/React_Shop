import React,{useEffect, useState} from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import * as AiIcons from 'react-icons/ai';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; //<
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; //>
import {useFirestoreConnect} from 'react-redux-firebase'
import {db} from '../../config/fbConfig'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { Link,withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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
    },
    backdrop: {
        zIndex: theme.zIndex.drawer,
        color: '#fff',
        backgroundColor:'rgba(0,0,0,.2)',
    },
  }));

const ComingAuction = () => {

    const classes = useStyles();

    const [item, setItem] = useState([])
    const [isEmpty, setIsEmpty] = useState('')

    let day = new Date()
    const fetch = db.collection('item').where('date','>',day).orderBy('date')
    useEffect(() => {
        setItem([])
        fetch.get().then((res) => { 
            console.log('data:',res.docs.length)
            if(res.docs.length === 0){
                setIsEmpty(true)
            }else{            
                setIsEmpty(false)
                res.docs.forEach((data) => {
                setItem((item) => [...item,data])
            })
        }
        })


    }, [])

    return(

        <>

{!isEmpty && item.map((data,index) => {
                        return <Grid item xs={3}>
                        <Card key={index}>
                        <Link to={`/item/${data.id}`} style={{textDecoration:'none', color:'#000'}}> 
                        <CardActionArea>
                            <CardMedia className={classes.media} image={data.data().img} title={data.data().title} />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="typotitle">
                            {data.data().title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" className="typotitle">
                            {new Date(data.data().date.seconds * 1000).toLocaleString()}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                        <IconButton aria-label="info" href="http://kko.to/NGwmYaT4o" target='_blank'>
                            <AiIcons.AiOutlineInfoCircle/>
                        </IconButton>                        
                            {  
                                <TimeLeft time={data.data().date.seconds}/>
                            }
                        </CardActions>
                        </Card>
                        
                        </Grid>
                        })
                        }


                        {
                            isEmpty && <Grid item xs={12}>
                                <Paper className={classes.paper}>No Item</Paper>
                            </Grid>
                        }

        </>

    )
}

class TimeLeft extends React.Component{


    constructor(props) {

        super(props);
        
        var date= this.getTimeString();
        this.state= {
          time: date,
          leftTime:this.props.time
        }
      }

      getTimeString() {
        const date = new Date(Date.now()).getTime();
        return date;
      }


      componentDidMount() {
        const _this = this;
        this.timer = setInterval(function(){
            var today = _this.getTimeString()

            var left = new Date(_this.state.leftTime * 1000).getTime()
            // left = new Date(left).getTime()-today
            left = left - today

            var day = Math.ceil(left / (1000 * 60 * 60 * 24));
            var hour = Math.ceil((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.ceil((left % (1000 * 60 * 60)) / (1000 * 60 * 60));
            var sec = Math.ceil((left % (1000 * 60)) / 1000);
            var date = day+' day  '+hour+' hour  '+min+' min  '+sec+' sec'
          _this.setState({
            time:date
          })
          
        },1000)
      }



      componentWillUnmount() {
          clearInterval(this.timer);
      }


      render() {
        return(
          <p>{this.state.time}</p>
        );
      }
}



export default ComingAuction