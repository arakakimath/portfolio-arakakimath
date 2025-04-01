import { GraduationCap } from 'phosphor-react'

import cv from '../assets/Matheus_Arakaki_s_resume_BR.pdf'
import { dev } from '../data/dev'

import styles from './Formation.module.css'

export function Formation() {
  return (
    <div className={styles.formation}>
      <h1 className={styles.title}>
        <span>Escolaridade </span>
        <GraduationCap />
      </h1>
      <main className={styles.main}>
        <p>{dev.master}</p>
        <p>{dev.bachelor}</p>
      </main>
      <a href={cv} download='Matheus_Arakaki_CV'>Download CV ⬇</a>
    </div>
  )
}