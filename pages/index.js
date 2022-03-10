import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage.</h1>
        <p className={styles.text}>Ninjas!!!!!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
