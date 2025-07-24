/* eslint-disable react-refresh/only-export-components */
import { Navigate } from "react-router-dom";
import { userContext } from "./ContextProvider"
import React, { useContext } from "react"

interface ProtectedRouteProps
{
    children:React.ReactNode;
    roles:string[]
}

const ProtectedRoute:React.FC<ProtectedRouteProps>=({children,roles})=>{
    const {role,authenticated}=useContext(userContext);

    if(!authenticated)
    {
        return <Navigate to={'/login'} replace={true}/>
    }
    else if(!roles.includes(role))
    {
        return <Navigate to={'/unauthorized'} replace={true}/>
    }
    return <>{children}</>;
}

export default ProtectedRoute;

