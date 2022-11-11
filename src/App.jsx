import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundaryPage from './components/ErrorBoundaryPage'
import './App.css'
import Loading from './components/Loading'
import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'
import PageNotFound from './components/PageNotFound'
import {ErrorBoundary} from 'react-error-boundary'
import { useContext, useState } from 'react'
import Authenticate from './components/Authenticate'




// const Authenticate = createContext(UserAuthentication)





export function App() {
    const value = useContext(Authenticate)
    const [user, setUser] = useState(null)
 const [verified, isVerified] = useState(value)
    // console.log(verified)
    console.log(Authenticate)
  return (
      <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
              <Authenticate.Provider value={{verified, isVerified}}>
          
      <BrowserRouter>
    <main>
         <Routes>
            <Route path='/' element={<Home setUser={setUser} user={user}/>}><Route path='/verification-message'/></Route>
            <Route path='/login' element={<Login isVerified={isVerified} setUser={setUser}/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path='/verify' element={<Verify />}/>
             <Route path='*' element={<PageNotFound/>}/>
          </Routes>
             
     
    </main>
    </BrowserRouter>

                   </Authenticate.Provider>
          </ErrorBoundary>
  )
}

export function Verify (){

    const {verified, isVerified} = useContext(Authenticate)
    
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
