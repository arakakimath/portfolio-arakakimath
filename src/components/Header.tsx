import { EnvelopeSimple, Copy, Phone, MapPin } from 'phosphor-react'

import { dev } from '../data/dev'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <header>
        <img src={`https://www.github.com/${dev.githubUsername}.png`} alt='profile pic' />
        <nav className={styles.nav}>
          <a href='#'>Início</a>
          <a href='#'>Sobre</a>
          <a href='#'>Serviços</a>
          <a href='#'>Tecnologias</a>
          <a href='#'>Projetos</a>
        </nav>
      </header>
      <main className={styles.main}>
        <img src={`https://www.github.com/${dev.githubUsername}.png`} alt='profile pic' />
        <p>
          <strong>{dev.name}</strong>
          <span>{dev.job}</span>
        </p>
      </main>
      <footer className={styles.footer}>
        <div className={styles.info}>
          <div>
            <EnvelopeSimple />
            <strong>Email</strong>
          </div>
          <div>
            <span>{dev.email}</span>
            <Copy />
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <Phone />
            <strong>Telefone</strong>
          </div>
          <div>
            <span>{dev.number}</span>
            <Copy />
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <MapPin />
            <strong>Location</strong>
          </div>
          <div>
            <span>{dev.location}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}