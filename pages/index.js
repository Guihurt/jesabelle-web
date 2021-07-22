import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber-Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="app">
          <p>App</p>
        </Link>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
