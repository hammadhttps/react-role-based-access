/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext,useState, type ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Shield, User, Users, Globe, LogIn, LogOut, Home, AlertTriangle } from 'lucide-react';


interface UserContextType
{
    role:string;
    authenticated:boolean;
    login:() => void;
    logout:() => void;
}

    export const userContext=createContext<UserContextType>({
        role:'',
        authenticated:false,
        login:() => {console.log('login')},
        logout:() => {console.log('logout')},
    });


    const ContextProvider:React.FC<{children:ReactNode}>=({children})=>{
        const [role, setRole] = useState<string>('');
        const [authenticated, setAuthenticated] = useState<boolean>(false);
        const login = () => {
            setAuthenticated(true);
            setRole('admin');
            };

            const logout = () => {
                setAuthenticated(false);
                setRole('');
                };

                return(
                    <userContext.Provider value={{role,authenticated,login,logout}}>
                        {children}
                    </userContext.Provider>

                );


        
    }

    export default ContextProvider



