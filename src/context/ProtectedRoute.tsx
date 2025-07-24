import { Navigate } from "react-router-dom";
import { userContext } from "./ContextProvider"
import { useContext } from "react"

const ProtectedRoute = ({children,roles}) => {
 const {role,authenticated}=useContext(userContext);
 if(!authenticated)
 {
    return <Navigate to="/login" replace={true} />
 }
 if(!roles.include(role))
 {
    return <Navigate to="/unauthorized" replace={true} />
 }
 return children;
}

export default ProtectedRoute