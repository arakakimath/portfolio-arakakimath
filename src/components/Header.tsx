import { EnvelopeSimple, Copy, Phone, MapPin, GithubLogo, LinkedinLogo } from 'phosphor-react'

import { dev } from '../data/dev'

import styles from './Header.module.css'

export function Header() {
  function handleCopyButton(event: React.MouseEvent<SVGSVGElement>) {
    const span = event.currentTarget.closest('div')?.querySelector('span')

    if (span) {
      navigator.clipboard.writeText(span.innerText)
        .then(() => alert(`Copied: ${span.innerText}`))
        .catch((err) => console.error('Failed to copy: ', err))
    } else console.warn('No text found to copy.')
  }

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
            <Copy onClick={handleCopyButton}/>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <Phone />
            <strong>Telefone</strong>
          </div>
          <div>
            <span>{dev.number}</span>
            <Copy onClick={handleCopyButton}/>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <MapPin />
            <strong>Local</strong>
          </div>
          <div>
            <span>{dev.location}</span>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <GithubLogo />
            <strong>GitHub</strong>
          </div>
          <div>
            <a href={dev.github}>@arakakimath ↗</a>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <LinkedinLogo />
            <strong>LinkedIn</strong>
          </div>
          <div>
            <a href={dev.linkedin}>@arakakimath ↗</a>
          </div>
        </div>
      </footer>
    </div>
  )
}