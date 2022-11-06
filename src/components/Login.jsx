// import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"

const Login = ()=> {
useDocumentTitle('Login - fakeuserAuth')
    const navigate = useNavigate()

    
    const  getUser = (e)=> {
        e.preventDefault()
        const user = e.target
        if ((user.username.value && user.password.value) !== "") {
            setTimeout(()=>{
                navigate('/')
            },5000)
           navigate('/loading') 
        
          
         console.log(user.username.value)
        console.log(user.password.value)
        }
       
         
      // if (user.username.value !== "") return redirect('/')

    } 
    
 return (
        <form onSubmit={getUser}> 
            <input type="text" name="username" placeholder="Enter username"/> 
            <br/>
            <br/>    
            <input type="password" name="password" placeholder="Enter password"/> 
            <br/> 
            <br/> 
            <button>Sign In</button>   
        </form>
)
}


export default Login