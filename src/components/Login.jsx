import { useNavigate } from "react-router-dom"
import useDocumentTitle from "./useDocumentTitle"

const Login = ({setUser})=> {
useDocumentTitle('Login - fakeuserAuth')
    const navigate = useNavigate()
    
    // isVerified({isAuthenticated: false})
    const getUser = (e)=> {
        e.preventDefault()
        const user = e.target
        setUser(user.username.value) 
        if ((user.username.value && user.password.value) !== "") {
            setTimeout(()=>{
                navigate('/')
            },5000)
        
           navigate('/loading') 


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