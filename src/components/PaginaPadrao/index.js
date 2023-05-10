import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'

export default function PaginaPrincipal() {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>

  )
}
