import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../routesPaths";

export const UserContext = createContext(null)

function getLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('user'))
    }
    catch(error) {
        return null
    }
}
 
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(getLocalStorage())
    const navigate = useNavigate()

    const loginUser = (response) => {
        setUser(response.user)
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate(paths.MAIN)
    }
    return <UserContext.Provider value={{user, loginUser}}>{children}</UserContext.Provider>
}