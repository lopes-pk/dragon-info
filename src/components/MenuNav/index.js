import React from 'react'
import styles from './MenuNav.module.css'
import { NavLink } from 'react-router-dom'

export default function MenuNav() {
  return (
    <header className={styles.cabecalhoContainer}>
      
      <nav className={styles.navBox}>
        <div className={styles.esfera}></div>
        <NavLink className={({ isActive }) =>
          `${styles.link}
          ${isActive ? styles.linkAtivado : ''}
          `
        } to={'/'}
          end>Inicio 
        </NavLink>
        <NavLink className={({ isActive }) =>
          `${styles.link}
          ${isActive ? styles.linkAtivado : ''}
          `
        } to={'/sobremim'}
          end>Sobre Nós</NavLink>
          <div className={styles.esfera}></div>
          
      </nav>
    </header>
  )
}
