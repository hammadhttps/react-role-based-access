import React, { useContext } from 'react'
import { userContext } from '../context/ContextProvider'
import { Home,  Shield, User } from 'lucide-react';
import Navigation from './Navigation';

const UserPage:React.FC = () => {

    const role=useContext(userContext);

    return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <User className="h-8 w-8 mr-3 text-blue-600" />
            User Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome to your personal workspace</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {role === 'admin' ? 'A' : 'U'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600 capitalize">{role} Account</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <p>Member since: January 2024</p>
                  <p>Last login: Today</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-900">Update Profile</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-green-900">Security Settings</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-900">Preferences</span>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">Profile updated</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">Login successful</p>
                  <p className="text-gray-500">Today at 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">Settings changed</p>
                  <p className="text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Documents</h4>
              <p className="text-gray-600 text-sm">Manage your personal documents and files</p>
              <div className="mt-3 text-blue-600 text-sm font-medium">View all →</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Projects</h4>
              <p className="text-gray-600 text-sm">Track your ongoing projects and tasks</p>
              <div className="mt-3 text-blue-600 text-sm font-medium">View all →</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">Reports</h4>
              <p className="text-gray-600 text-sm">Access your generated reports and analytics</p>
              <div className="mt-3 text-blue-600 text-sm font-medium">View all →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default UserPage