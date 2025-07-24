import React from 'react'
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import ProtectedRoute from './context/ProtectedRoute'
import AdminPage from './pages/AdminPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <LoginPage/> }/>
        <Route path='./unauthorized' element={<UnauthorizedPage/>} />
        <Route path='/admin' element={<ProtectedRoute roles={['admin']}>
          <AdminPage/>

        </ProtectedRoute>}></Route>

        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </Router>

  )
}

export default App