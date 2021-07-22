import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import Grid from '../components/Grid/Grid.js'

function App() {

  return (
    <div className={styles.container}>
      <h1>Uber-Journal</h1>
      <Link href="/">
        <p>Splash Page</p>
      </Link>
      <Grid />
    </div>
  )

}

export default App;