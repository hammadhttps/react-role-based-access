/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext,useState, type ReactNode } from 'react';

interface UserContextType
{
    role:string;
    authenticated:boolean;
    login:(user:string) => void;
    logout:() => void;
}

    export const userContext=createContext<UserContextType>({
        role:'',
        authenticated:false,
        login:(userRole:string) =>{} ,
        logout:() => {},
    });


    const ContextProvider:React.FC<{children:ReactNode}>=({children})=>{
        const [role, setRole] = useState<string>('');
        const [authenticated, setAuthenticated] = useState<boolean>(false);
         
        const login = (userRole: string) => {
    setRole(userRole);
    setAuthenticated(true);
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



