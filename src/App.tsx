import React from 'react'
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import ProtectedRoute from './context/ProtectedRoute'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import GuestPage from './pages/GuestPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <LoginPage/> }/>
        <Route path='./unauthorized' element={<UnauthorizedPage/>} />
        <Route path='/admin' element={<ProtectedRoute roles={['admin']}>
          <AdminPage/>

        </ProtectedRoute>}></Route>
         <Route path='/user' element={<ProtectedRoute roles={['admin','user']}>
          <UserPage/>

        </ProtectedRoute>}></Route>

         <Route path='/guest' element={<ProtectedRoute roles={['admin','user','guest']}>
          <GuestPage/>

        </ProtectedRoute>}></Route>

        

        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </Router>

  )
}

export default App