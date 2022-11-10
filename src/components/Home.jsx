import Navigation from "./Navigation"
// import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useDocumentTitle from "./useDocumentTitle"
import { useEffect } from "react"
const Home = ({user, setUser})=>{
     const navigate = useNavigate()
    useEffect(()=>{
      if (!user) {
      navigate('/login')
  }  
    }, [user])

const handleLogout = () => {
    setUser(null);
    navigate('/login')
}
    console.log(user)
       
    useDocumentTitle('Home - fakeuserAuth')
      
    return (
        <div>
            <Navigation />
            <h1>Hello {user.toUpperCase()}</h1>
            <div className="home-btns">
                <button onClick={()=>{
                navigate('/verify')
            }}>Click to check if account is verified</button>
                        <button onClick={handleLogout}>Logout</button>

            </div>

                        </div>
    )
}

export default Home