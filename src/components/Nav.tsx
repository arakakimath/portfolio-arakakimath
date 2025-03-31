import styles from './Nav.module.css'

export function Nav() {
  return (
    <main className={styles.nav}>
      <a href='#'>Início</a>
      <a href='#'>Sobre</a>
      <a href='#'>Serviços</a>
      <a href='#'>Tecnologias</a>
      <a href='#'>Projetos</a>
    </main>
  )
}