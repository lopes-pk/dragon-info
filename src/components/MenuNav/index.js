import React from 'react'
import styles from './MenuNav.module.css'
import MenuNavLink from '../MenuNavLink'

export default function MenuNav() {
  return (
    <header className={styles.cabecalhoContainer}>
      <nav className={styles.navBox}>
        <div className={styles.esfera}></div>
        <MenuNavLink para={'/'}>inicio</MenuNavLink>
        <MenuNavLink para={'/franquia'}>franquia</MenuNavLink>
      </nav>
    </header>
  )
}
