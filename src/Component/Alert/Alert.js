import React, {useEffect} from 'react'
import './Alert.css'
const Alert = ({type,msg,removeAlert}) => {
    useEffect(()=> {
        const time = setTimeout(()=>{
            removeAlert()
        },3000)
        return ()=> clearTimeout(time)
    },[removeAlert])
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}

export default Alert