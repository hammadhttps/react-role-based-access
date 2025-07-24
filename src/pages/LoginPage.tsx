import React, { useContext, useState } from "react"
import { userContext } from "../context/ContextProvider"
import { LogIn, Shield, User, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage:React.FC = () => {

    const {login} =useContext(userContext);
    const [selectedRole, setSelectedRole] = useState<string>('guest');
       const navigate = useNavigate();
    
      const handleLogin = () => {
        login(selectedRole);
        // Add navigation based on role
        switch(selectedRole) {
            case 'admin':
                navigate('/admin');
                break;
            case 'user':
                navigate('/user');
                break;
            default:
                navigate('/guest');
        }
    }

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
                <LogIn className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Choose your role to access the dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <div className="space-y-3">
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedRole === 'guest' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRole('guest')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      selectedRole === 'guest' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Globe className={`h-5 w-5 ${
                        selectedRole === 'guest' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Guest User</h3>
                      <p className="text-sm text-gray-600">Basic access to public content</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedRole === 'user' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRole('user')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      selectedRole === 'user' ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <User className={`h-5 w-5 ${
                        selectedRole === 'user' ? 'text-green-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Regular User</h3>
                      <p className="text-sm text-gray-600">Access to user and guest areas</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedRole === 'admin' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRole('admin')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      selectedRole === 'admin' ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      <Shield className={`h-5 w-5 ${
                        selectedRole === 'admin' ? 'text-purple-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Administrator</h3>
                      <p className="text-sm text-gray-600">Full access to all areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-700 mb-2">🚀 Demo Application</p>
              <p className="text-xs">This is a demonstration of role-based access control. Select any role above to explore different permission levels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage