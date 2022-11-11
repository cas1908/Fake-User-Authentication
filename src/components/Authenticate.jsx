import { createContext } from "react"
const UserAuthentication = {
    isAuthenticated: false
}
const Authenticate = createContext(UserAuthentication)
export default Authenticate