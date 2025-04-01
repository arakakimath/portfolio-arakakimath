import { About } from './components/About'
import { Formation } from './components/Formation'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.doubleColumn}>
        <About />
        <Formation />
      </div>
    </>
  )
}

export default App
