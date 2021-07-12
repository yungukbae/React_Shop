import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { auth } from '../config/fbConfig'
import { useDispatch } from 'react-redux'
import {authUser} from '../action/authAction'


export default function (SpecificComponent, option, adminRoute = null){

    //null => anybody
    //true => login user
    //false => non login user
    
    const dispatch = useDispatch();
    function AuthenticationCheck(){
        const history = useHistory(); 
         //정상 동작
        useEffect(() => {
            setTimeout(() => {
                const data = dispatch(authUser())
                // console.log(data)
                if(data.payload === null){  //logout
                    if(option){             //option===true
                        history.push('/login')
                    }
                }else{  //login
                    if(!option && option !== null){ //option === false
                        history.goBack()
                    }
                }
            }, 1000);
        },[SpecificComponent])
        
        // console.log(data)

        return <SpecificComponent/>
    }





    // function AuthenticationCheck(){

    //     const history = useHistory();

    //     useEffect(() => {
    //         const accessToken = localStorage.getItem('accessToken')
    //         if(!accessToken){
                
    //             if(option){
    //                 history.push('/login')
    //             }
    //         }else{
    //             if(adminRoute && !accessToken){
    //                 history.push('/')
    //             }else{
    //                 if(option === false){
    //                     history.push('/')
    //                 }
    //             }
    //         }
    //         //로그인 하지 않은 상태
    //     }, [])

    //     return(
    //         <SpecificComponent />
    //     )

    // }
return AuthenticationCheck
}