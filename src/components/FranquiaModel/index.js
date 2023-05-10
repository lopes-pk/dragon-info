import React from 'react'
import styles from './FranquiaModel.module.css'
import jsonFranquia from '../../json/franquiaDB.json'

export default function FranquiaModel() {
  return (
    <main className={styles.franquiaMain}>
      <div className={styles.titleBox}>
        <h2 className={styles.title1}>E qual a ordem correta para assistir ao anime?</h2>
        <p className={styles.title2}>Separamos pra você uma lista com a ordem completa</p>
      </div>
      <section className={styles.secaoFranquiaContainer}>
        {jsonFranquia.map((franquia) => {
          return (
            <div className={styles.franquiaBox}>
              <h2 className={styles.franquiaTitle}>{franquia.title}</h2>
              <div className={styles.imgBox}>
                <img src={franquia.img} alt='Imagem de capa das franquias de drabon ball' className={styles.imgCapa}/>
              </div>
              <div className={styles.descricaoBox}>
                <p className={styles.descricao}>{franquia.descricao}</p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
