import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuNavLink.module.css'

export default function MenuNavLink({ para, children }) {
  return (
    <>
      <NavLink className={({ isActive }) =>
        `${styles.link}
          ${isActive ? styles.linkAtivado : ''}
          `
      } to={para}
        end>{children}
      </NavLink>
    </>
  )
}
