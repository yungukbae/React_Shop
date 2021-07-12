import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#dee2e6'
  },
  block:{
    height: 300,
    width: 230,
  },
  textfield:{
    margin: theme.spacing(0),
  },
  date:{
    width:300,
  }
  ,Grid:{
    alignContent:'center'
  },
  input:{
    display:'none'
  },
  card:{
    flexGrow: 1,
    textAlign:'center',
    lineHeight:'18'
  }
}));


const CreateProject = () => {

    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [state, setState] = React.useState({
      USD: true,
      WON: true,
      EUR: true,
      JPY: true,
    });

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    
    return(
        <>
        <div className="container">
        <form className="form">
        <CssBaseline />
        <Container>
        <Typography component="div" style={{ backgroundColor: '#fff', height: '100%', border:'2px solid #000'}}>
        <div className={classes.root}>



              {/* pagetitle */}
              <Grid container spacing={3}>
              <Grid item xs={1}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>
              <Grid item xs={10}>
                <Paper className={classes.paper}>Create Item</Paper>
              </Grid>
              <Grid item xs={1}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>
              







        {/* picture card */}
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={8}>
                    
                      <Grid key={1} item>
                        <Paper className={classes.block}>

                        <div className={classes.card}>
      
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </div>

                        </Paper>
                      </Grid>
                    
                  </Grid>
                </Grid>
              </Grid>







              {/* title of work */}
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>
              <Grid item xs={8}>
              <TextField
                  className={classes.textfield}
                  id="standard-multiline-flexible"
                  label="Title of the work"
                  multiline
                  rowsMax={4}
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>







              {/* artist name */}
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>
              <Grid item xs={8}>
                <TextField className={classes.textfield} id="filled-search" variant="filled" label="Artist Name" type="search" fullWidth/>
              </Grid>
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>










                {/* date field */}
                <Grid item xs={2}>
                {/* <Paper className={classes.paper}></Paper> */}
                </Grid>
                <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  
                <KeyboardDatePicker
                  className={classes.date}
                  id="date-picker-dialog"
                  label="Birth Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </Grid>
                </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={2}>
                  <Paper className={classes.paper}>~</Paper>
                </Grid>
                <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  
                <KeyboardDatePicker
                  className={classes.date}
                  id="date-picker-dialog"
                  label="Dead Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </Grid>
                </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={2}>
                {/* <Paper className={classes.paper}></Paper> */}
                </Grid>








              {/* paint tech */}
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>
              <Grid item xs={8}>
              <TextField
                id="outlined-multiline-static"
                label="Illustration Techniques"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
              />
              </Grid>
              <Grid item xs={2}>
              {/* <Paper className={classes.paper}></Paper> */}
              </Grid>










                  {/* size */}
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>
                  <Grid item xs={2}>
                  <TextField required id="standard-required" label="Width" />
                  </Grid>
                  <Grid item xs={1}>
                  <Paper className={classes.paper}>-</Paper>
                  </Grid>
                  <Grid item xs={2}>
                  <TextField required id="standard-required" label="Height" />
                  </Grid>
                  <Grid item xs={1}>
                  <Paper className={classes.paper}>-</Paper>
                  </Grid>
                  <Grid item xs={2}>
                  <TextField required id="standard" label="Top" />
                  </Grid>
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>







                  {/* identification */}
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                    id="outlined-multiline-static"
                    label="Genuine Identification"
                    multiline
                    fullWidth
                    rows={4}
                    variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>





                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  
                <KeyboardDatePicker
                  className={classes.date}
                  id="date-picker-dialog"
                  label="Auction day"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </Grid>
                </MuiPickersUtilsProvider>
                  </Grid>
                <Grid item xs={2}></Grid>





                  {/* cost range */}
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>
                  
                  <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="USD"
                        color="primary"
                      />
                    }
                    label="$"
                  />
                  
                  </Grid>
                  <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="EUR"
                        color="primary"
                      />
                    }
                    label="€"
                  />
                  </Grid>
                  <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="WON"
                        color="primary"
                      />
                    }
                    label="₩"
                  />
                  </Grid>
                  <Grid item xs={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="JPY"
                        color="primary"
                      />
                    }
                    label="¥"
                  />
                  </Grid>
                  <Grid item xs={2}>
                  {/* <Paper className={classes.paper}></Paper> */}
                  </Grid>










                        {/* cost range text input box */}
                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <Paper className={classes.paper}>~</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                          





                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">€</InputAdornment>}
                        />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <Paper className={classes.paper}>~</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">€</InputAdornment>}
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>








                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">₩</InputAdornment>}
                        />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <Paper className={classes.paper}>~</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">₩</InputAdornment>}
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>









                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">¥</InputAdornment>}
                        />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        <Paper className={classes.paper}>~</Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                          id="filled-adornment-amount"
                          // value={values.amount}
                          // onChange={handleChange('amount')}
                          startAdornment={<InputAdornment position="start">¥</InputAdornment>}
                          />
                        </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>




                        <Grid item xs={4}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>
                        
                        <Grid item xs={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<CloudUploadIcon />}
                          
                        >
                          Upload
                        </Button>
                        </Grid>
                        <Grid item xs={2}>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                        </Grid>
                        
                        <Grid item xs={4}>
                        {/* <Paper className={classes.paper}></Paper> */}
                        </Grid>



                  <Grid item xs={12}>
                  {/* <Paper className={classes.paper}>-</Paper> */}
                  </Grid>
        </Grid>
        
        </div>
        </Typography>
        </Container>
        </form>
        </div>
        </>
    )

}

export default CreateProject;