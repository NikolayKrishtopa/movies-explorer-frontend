import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const { component: Component, isLogged } = props

  return isLogged ? <Component {...props} /> : <Navigate to='/' />
}

export default ProtectedRoute
