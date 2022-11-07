
import { useNavigate } from "react-router-dom"
import Home from "./Home"
import useDocumentTitle from "./useDocumentTitle"

const Login = ()=> {
useDocumentTitle('Login - fakeuserAuth')
    const navigate = useNavigate()

    
    const getUser = (e)=> {
        e.preventDefault()
        const user = e.target
        if ((user.username.value && user.password.value) !== "") {
            setTimeout(()=>{
                navigate('/')
            },5000)
           navigate('/loading') 

          
         console.log(user.username.value)
        console.log(user.password.value)
        return   <Home user={user.username.value}/>
        }
       


    } 
    
 return (
        <form onSubmit={getUser}> 
            <input type="text" name="username" placeholder="Enter username"/> 
            <br/> 
            <input type="password" name="password" placeholder="Enter password"/> 
            <br/> 
            <button>Sign In</button>   
        </form>
)
}


export default Login