import { useState, useContext, createContext, useEffect, Children} from "react";
import AuthService from "../services/auth.service";

const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(getUser);
    const login = (user) => setUser(user);
    const logout = () =>{
        AuthService.logout();
        setUser(null);
    }

    const getUser = () => {
        const temp = localStorage.getItem("user");
        const savedUser = JSON.parse(temp);
        return savedUser || null;
    }

    useEffect(()=>{
      const temp = JSON.stringify(user);
      localStorage.setItem("user", temp); //localStorage.setItem("user", JSON.stringify(user));
    },[user]);
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuthContext = () => useContext(AuthContext);