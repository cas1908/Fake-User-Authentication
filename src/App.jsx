import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'
import Login from './components/Login'
import Home from './components/Home'
import Page404 from './components/Page404'
import {ErrorBoundary} from 'react-error-boundary'
import { createContext, useContext, useState } from 'react'

const UserAuthentication = {
    isAuthenticated: false
}

const Authenticate = createContext(UserAuthentication.isAuthenticated)





export function App() {

    
  return (
          <ErrorBoundary FallbackComponent={ErrorBoundary}>
      <BrowserRouter>
    <main>
         <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
             <Route path='/loading' element={<Loading/>}/>
             <Route path='*' element={<Page404/>}/>

</Routes>
             
      React ⚛️ + Vite ⚡ + Replit 🌀
    </main>
    </BrowserRouter>
        </ErrorBoundary>
  )
}

export function Verify (){
const AuthenticateUser = useContext(Authenticate)
    const [verified, isVerified] = useState(true)
    
    const UserVerification = ()=> {
        isVerified(true)
       console.log(AuthenticateUser)
    console.log(verified)

// console.log(AuthenticateUser.isAuthenticated)
       
    } 
        if (verified) {
        return <div>verified</div>
    }
    return  (
        <Authenticate.Provider value={verified}>
        <div>
            <button onClick={UserVerification}>Verify</button>
        </div>
            </Authenticate.Provider>
    )

}
