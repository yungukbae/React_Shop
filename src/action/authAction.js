
// import { request } from "../util/axios";
// import axios from 'axios'

import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER} from './type'

import { auth,db } from '../config/fbConfig'

export const authUser = () => {
    try{
        const userInfo = auth.currentUser
        return{
            type:AUTH_USER,
            payload: userInfo
        }
    }catch(error){
        alert(error.message)
        return{
            error
        }
    }
}

export const loginUser = (dataToSubmit,history) => {

    try{
        const data = auth.signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password).then((res) => {
            history.goBack()
            // console.log(res)
            return res.credential
        }).catch((err) => {
            alert(err.message)
            return err.message
        })


        return {
            type:LOGIN_USER,
            payload:data
        }
    }catch(error){
        alert(error.message)
        return{
            error
        }
    }

}


export const registerUser = (dataToSubmit,history) => {
    
    try{
        const data = auth.createUserWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password).then((data)=>{
        history.goBack()
        return db.collection('users').doc(data.user.uid).set({
                email:dataToSubmit.email,
                name:dataToSubmit.name
            }); 
        }).catch((err) => {
            alert(err.message)
        })
        
        
        
        return {
                type:REGISTER_USER,
                payload: data
        }

    }catch(error){
        alert(error.message)
        return{
            error
        }
    }
        
}


export const logoutUser = () => {
    try{
        const data = auth.signOut()
        setTimeout(() => {
            window.location.reload();
        }, 500);
        
        
        return{ 
            type:LOGOUT_USER,
            payload: data
        }
        
    }catch(error){
        alert(error.message)
        return{
            error
        }
    }

}

// export const registerUser = async (dataToSubmit) => {
    
//     try{
//         const data = await axios.post('/auth/register', dataToSubmit)
//         const response_data = await data.data
//         return{
//             type:REGISTER_USER,
//             payload: response_data
//         }
//     }catch(error){
//         console.log("Fail to Register",error)
//         return error
//     }
    
// }

// export const loginUser = async (dataToSubmit) => {

//     try{
//     const data = await axios.post('/auth/login',dataToSubmit)
//     const response_data = await data.data
//     return{
//         type: LOGIN_USER,
//         payload: response_data
//     }
//     }catch(error){
//         console.log("Fail to Login:",error)
//         return error
//     }
    
    
// }