import React, { useState } from 'react'
import styles from './CardsModel.module.css'
import characters from '../../json/characters.json'
import { Link } from 'react-router-dom';
export default function CardsModel() {
  const [ativo, setAtivo] = useState(null);
  const mouseEmCima = (id) => {
    setAtivo(id)
  }
  const mouseFora = () => {
    setAtivo(null)
  }
  return (
    <section className={styles.cardsContainer}>
      {characters.characters.map((char) => {
        return (
          <Link key={char.id}  to={`/char/${char.id}`} className={styles.link}>
            <div className={styles.card} onMouseOver={() => mouseEmCima(char.id)} onMouseLeave={mouseFora}>
              <div className={styles.boxTitulo}>
                <h3 className={styles.cardTitulo}>{char.name}</h3>
              </div>
              <div className={styles.cardBox}>
                <img src={char.img} className={styles.cardImg} style={ativo === char.id ? { filter: `drop-shadow(0rem 0rem 8px ${char.imgAtive}` } : {}} alt='imagem personagem do card dragon ball'></img>
              </div>
              <div className={styles.raceBox}>
                <h4 className={styles.race}>{char.race}</h4>
              </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}


