import React, { useContext, useState } from "react"
import { userContext } from "../context/ContextProvider"
import { LogIn } from "lucide-react";

const LoginPage:React.FC = () => {
    const {login} =useContext(userContext);
    const {selectedRole,setSelectedRole}=useState('guest');

    const handleLogin=()=>{
        login();
    }

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <LogIn className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to access your dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="guest">Guest User</option>
                <option value="user">Regular User</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
            >
              Sign In
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-2">Demo Credentials:</p>
              <ul className="space-y-1">
                <li>• Guest: Basic access to public content</li>
                <li>• User: Access to user and guest areas</li>
                <li>• Admin: Full access to all areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage