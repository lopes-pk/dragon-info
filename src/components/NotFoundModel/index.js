import React from 'react'
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

export default function NotFoundModel() {
  const back = useNavigate()
  return (
    <main className={styles.mainNotFound}>
      <div className={styles.caixaConteudo}>
        <div className={styles.tituloEFrase}>
          <h2 className={styles.titulo}>página não encontrada</h2>
          <h3 className={styles.erro404}>erro 404</h3>
          <p className={styles.frase}>Desculpe não encontramos essa página,<br/> por favor verifique ou tente novamente mais tarde</p>
          <button onClick={()=>{
            back(-1)
          }} className={styles.button}>voltar</button>
        </div>
        <div className={styles.circulo}>
          <div className={styles.imagemGoku}></div>
        </div>
      </div>
    </main>
  )
}
