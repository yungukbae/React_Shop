import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as FaIcons from 'react-icons/fa';
import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import firebase from "firebase/app";
import {logoutUser} from '../action/authAction'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
  }));
const UserIcon = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const data = firebase.auth().onAuthStateChanged(cred => {
        if(cred){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    }
    );

   
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const classes = useStyles();


    const handleClose = (e) => {
        switch(e){
            case 1:
                setAnchorEl(null)
                return console.log(e);
            case 2:
                setAnchorEl(null)
                history.push('/cart')
                return console.log(e);
            case 3:
                setAnchorEl(null)
                setIsLoggedIn(false)
                return dispatch(logoutUser());
            default:
                return setAnchorEl(null)
        }
    }

    return(
        <>
        
                    <button className="user-icon" aria-controls="simple-menu" aria-haspopup="false">
                    { isLoggedIn ? <Tooltip title="User Info" placement="left"><div onClick={handleClick}><FaIcons.FaUserCircle /></div></Tooltip> : <Tooltip title="Sign In" placement="left"><div onClick={() => history.push('/login')}><FaIcons.FaSignInAlt/></div></Tooltip>}
                    </button>
                    
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <div onClick={() => handleClose(1)}><MenuItem>Profile</MenuItem></div>
                    <div onClick={() => handleClose(2)}><MenuItem>My Cart</MenuItem></div>
                    <div onClick={() => handleClose(3)}><MenuItem>Logout</MenuItem></div>
                    </Menu>

        </>
    )

}

export default UserIcon;