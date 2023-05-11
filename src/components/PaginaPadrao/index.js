import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import Rodape from '../Rodape'
import MenuNav from '../MenuNav'


export default function PaginaPrincipal() {
  return (
    <div>
      <MenuNav />
      <Banner />
      <Outlet />
      <Rodape />
    </div>

  )
}
