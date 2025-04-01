import styles from './About.module.css'

export function About() {
  return (
    <div className={styles.about}>
        <h1>Sobre mim</h1>
        <div>
          <h2>Olá! Meu nome é Matheus Arakaki.</h2>
          <h2>Sou Desenvolvedor Web FullStack especializado em TypeScript, utilizando Node.js no Back-End e React.js no Front-End.</h2>
          <h2>Tenho experiência na construção de APIs escaláveis, aplicações modernas e soluções eficientes para a web. Sou apaixonado por tecnologia, boas práticas de código e sempre busco evoluir, explorando novas ferramentas e arquiteturas.</h2>
        </div>
    </div>
  )
}