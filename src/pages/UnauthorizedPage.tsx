/* eslint-disable react-refresh/only-export-components */

import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
 const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full shadow-sm">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          
          <div className="space-y-3">
            <Link
              to="/login"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold shadow-md"
            >
              Back to Login
            </Link>
            <Link
              to="/guest"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-all border border-gray-200 font-medium"
            >
              Go to Guest Area
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;