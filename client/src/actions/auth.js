import * as api from '../api';
export const signup =(authData,navigate) =>async(dispatch)=>{
   console.log("dr\ata prsnt")
try {
    const {data} = await api.signUp(authData)
    dispatch({type: 'AUTH',data})
    navigate('/')
    
} catch (error) {
   console.log(error.response) 
   console.log("error")
}

}


export const login =(authData,navigate) =>async(dispatch)=>{
    try {
        const {data} = await api.signUp(authData)
        dispatch({type: 'AUTH',data})
        navigate('/')
        
    } catch (error) {
        console.log(error.response)
    }
    
}