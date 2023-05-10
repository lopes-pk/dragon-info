import React from 'react'
import styles from './CharModel.module.css'

export default function CharModel({ image, power, defense, health, kiRestore,bio, charName }) {
  return (
    <article className={styles.article}>
      <div className={styles.nameBox}>
        <h2 className={styles.name}>{charName}</h2>
      </div>
      <div className={styles.charImgContainer}>
        <div className={styles.charImgBackground}>
          <div className={styles.charAttributesLeft}>
            <h3 className={styles.charAttributes}>health <br/> {health}</h3>
            <h3 className={styles.charAttributes}>defense <br/> {defense}</h3>
          </div>
          <div className={styles.charImgBox}>
            <img className={styles.charImg} src={image} />
          </div>
          <div className={styles.charAttributesRight}>
            <h3 className={styles.charAttributes}>power <br/> {power}</h3>
            <h3 className={styles.charAttributes}>Ki Restore <br/> {kiRestore}</h3>
          </div>
        </div>
      </div>
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
    </article>
  )
}
