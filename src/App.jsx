import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'
import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'
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
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path='/verify' element={<Verify/>}/>
             <Route path='*' element={<Page404/>}/>
          </Routes>
             
     
    </main>
    </BrowserRouter>
</ErrorBoundary>
  )
}

export function Verify (){
const {AuthenticateUser} = useContext(Authenticate)
    const [verified, isVerified] = useState(AuthenticateUser)
    
    const UserVerification = ()=> {
        isVerified({isAuthenticated: true})
       console.log(AuthenticateUser)
    console.log(verified)

       
    } 
        if (verified) {
        return  <div className='verified'> <Navigation />
            <img src='success-green-check-mark-icon.png' alt='checkmark' />
        </div>
    }
    return  (
        <Authenticate.Provider value={verified}>
          <Navigation />
        <div className='verify'>
            <button className="verify-btn" onClick={UserVerification}>Verify</button>

        </div>
        </Authenticate.Provider>
    )

}
