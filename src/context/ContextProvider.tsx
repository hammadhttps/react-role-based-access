import { createContext, type FC } from "react";


export const userContext=createContext();


const ContextProvider=({children}: { children: React.ReactNode }) => {
    const role:string='admin';
    const authenticated:boolean=true;
    return
    (
        <userContext.Provider value={{role,authenticated}}>
            {children}
        </userContext.Provider>
    )

}

export default ContextProvider;