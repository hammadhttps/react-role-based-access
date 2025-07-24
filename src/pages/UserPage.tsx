import React, { useContext } from 'react'
import { userContext } from '../context/ContextProvider'
import { Activity, Bell, Home, Settings, Shield, User } from 'lucide-react';
import NavigationComponent from './Navigation';

const UserPage:React.FC = () => {

    const { role } = useContext(userContext);

    return (
    <div className="min-h-screen bg-gray-50">
      <NavigationComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header with Breadcrumb */}
        <div className="mb-8">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Home className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500">Dashboard</span>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400">/</span>
                  <span className="ml-1 text-sm font-medium text-gray-700 capitalize">{role || 'User'} Area</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <User className="h-8 w-8 mr-3 text-blue-600" />
                User Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your account.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-600 text-sm font-medium">+2.5%</span>
              <span className="text-gray-500 text-sm ml-1">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Tasks</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-600 text-sm font-medium">+12%</span>
              <span className="text-gray-500 text-sm ml-1">from last week</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hours Logged</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <User className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-red-600 text-sm font-medium">-3%</span>
              <span className="text-gray-500 text-sm ml-1">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-600 text-sm font-medium">+1</span>
              <span className="text-gray-500 text-sm ml-1">new this month</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                {role === 'admin' ? 'A' : role === 'user' ? 'U' : 'G'}
              </div>
              <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
              <p className="text-gray-600 capitalize">{role || 'Guest'} Account</p>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Member since:</span>
                    <span className="font-medium">Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last login:</span>
                    <span className="font-medium text-green-600">Today</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:shadow-sm border border-blue-100">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="text-blue-900 font-medium">Update Profile</span>
                    <p className="text-blue-700 text-xs">Manage your personal information</p>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-all duration-200 hover:shadow-sm border border-green-100">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="text-green-900 font-medium">Security Settings</span>
                    <p className="text-green-700 text-xs">Password and 2FA settings</p>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all duration-200 hover:shadow-sm border border-purple-100">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <div>
                    <span className="text-purple-900 font-medium">Preferences</span>
                    <p className="text-purple-700 text-xs">Customize your experience</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Profile updated</p>
                  <p className="text-xs text-gray-500">Updated contact information</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Login successful</p>
                  <p className="text-xs text-gray-500">Signed in from Chrome</p>
                  <p className="text-xs text-gray-400 mt-1">Today at 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Settings changed</p>
                  <p className="text-xs text-gray-500">Updated notification preferences</p>
                  <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-blue-300 group">
              <h4 className="font-medium text-gray-900 mb-2">Documents</h4>
              <p className="text-gray-600 text-sm">Manage your personal documents and files</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">24</span>
                <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">View all →</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-green-300 group">
              <h4 className="font-medium text-gray-900 mb-2">Projects</h4>
              <p className="text-gray-600 text-sm">Track your ongoing projects and tasks</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">8</span>
                <div className="text-green-600 text-sm font-medium group-hover:text-green-700">View all →</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-purple-300 group">
              <h4 className="font-medium text-gray-900 mb-2">Reports</h4>
              <p className="text-gray-600 text-sm">Access your generated reports and analytics</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">12</span>
                <div className="text-purple-600 text-sm font-medium group-hover:text-purple-700">View all →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default UserPage