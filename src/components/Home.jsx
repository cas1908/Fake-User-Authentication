import Navigation from "./Navigation"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useDocumentTitle from "./useDocumentTitle"
const Home = ()=>{
    const [user, setUser] = useState(null)
    // const handleLogin = () => setUser({name: 'cas' });
const handleLogout = () => {
    setUser(null);
    navigate('/login')
}
    console.log(user)
        const navigate = useNavigate()
    useDocumentTitle('Home - fakeuserAuth')
      if (!user) {
      navigate("/login")
  } else navigate("/")
    return (
        <div>
            <Navigation />
            <h1>Hello User</h1>
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