import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundaryPage from './components/ErrorBoundaryPage'
import './App.css'
import Loading from './components/Loading'
import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'
import PageNotFound from './components/PageNotFound'
import {ErrorBoundary} from 'react-error-boundary'
import { createContext, useContext, useState } from 'react'


const UserAuthentication = {
    isAuthenticated: false
}

const Authenticate = createContext(UserAuthentication)





export function App() {
    
    const [user, setUser] = useState(null)
 // const [verified, isVerified] = useState(Authenticate)
    // console.log(verified)
    console.log(Authenticate)
  return (
              <Authenticate.Provider value={UserAuthentication}>
          <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
      <BrowserRouter>
    <main>
         <Routes>
            <Route path='/' element={<Home setUser={setUser} user={user}/>}><Route path='/verification-message'/></Route>
            <Route path='/login' element={<Login setUser={setUser}/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path='/verify' element={<Verify />}/>
             <Route path='*' element={<PageNotFound/>}/>
          </Routes>
             
     
    </main>
    </BrowserRouter>
</ErrorBoundary>
                   </Authenticate.Provider>
  )
}

export function Verify (){

const value = useContext(Authenticate)
        const [verified, isVerified] = useState(value)
    const UserVerification = ()=> {
       if  (!verified.isAuthenticated) {
           isVerified({isAuthenticated: true})
            console.log(Authenticate)
       } else {
         isVerified({isAuthenticated: false})  
       }
       // console.log(AuthenticateUser)
    console.log(verified)
    }
    if (verified.isAuthenticated) {
                return  <div className='verified'> 
                        <Navigation />
                        <img src='success-green-check-mark-icon.png' alt='checkmark' />
                    </div>
     } 

        

        
        
    
    return  (
        <div>
        
          <Navigation />
        <div className='verify'>
            <button className="verify-btn" onClick={UserVerification}>Verify</button>

        </div>
       </div>
    )

}
