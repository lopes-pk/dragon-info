import React from 'react'
import styles from './CharModel.module.css'

export default function CharModel({ image, power, defense, health, kiRestore, bio, charName, skills }) {
  return (
    <article className={styles.article}>
      <div className={styles.nameBox}>
        <h2 className={styles.name}>{charName}</h2>
      </div>
      <div className={styles.charImgContainer}>
        <div className={styles.charImgBackground}>
          <div className={styles.charAttributesLeft}>
            <h3 className={styles.charAttributes}>health <br /> {health}</h3>
            <h3 className={styles.charAttributes}>defense <br /> {defense}</h3>
          </div>
          <div className={styles.charImgBox}>
            <img className={styles.charImg} src={image} alt="imagem do personagem selecionado na pagina de caracteristicas do mesmo" />
          </div>
          <div className={styles.charAttributesRight}>
            <h3 className={styles.charAttributes}>power <br /> {power}</h3>
            <h3 className={styles.charAttributes}>Ki Restore <br /> {kiRestore}</h3>
          </div>
        </div>
      </div>
      <div className={styles.infoGerais}>
        <div className={styles.bioContainer}>
          <div className={styles.tituloBioBox}>
            <h2 className={styles.tituloBio}>biografia</h2>
          </div>
          <div className={styles.textBioBox}>
            <p className={styles.textBio}>
              {bio}
            </p>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.skillBoxTitle}>
            <h2 className={styles.skillTitle}>skills</h2>
          </div>
          <ul className={styles.skillBoxText}>
            <li className={styles.skill}>> {skills[0]}</li>
            <li className={styles.skill}>> {skills[1]}</li>
            <li className={styles.skill}>> {skills[2]}</li>
          </ul>
        </div>
      </div>

    </article>
  )
}
