import { useContext } from "react"
import { userContext } from "../context/ContextProvider"
import { Globe, LogOut, Shield, User, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {

    const {authenticated,role,logout}=useContext(userContext);

    if(!authenticated) return null;

    return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-bold text-xl">RoleManager</span>
            </div>
            
            <div className="flex space-x-4">
              <Link 
                to="/guest" 
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>Guest Area</span>
              </Link>
              
              {(role === 'user' || role === 'admin') && (
                <Link 
                  to="/user" 
                  className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>User Area</span>
                </Link>
              )}
              
              {role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Users className="h-4 w-4" />
                  <span>Admin Panel</span>
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              Role: <span className="font-semibold capitalize">{role}</span>
            </span>
            <button
              onClick={logout}
              className="flex items-center space-x-1 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    )
  
}

export default Navigation