import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem </p>
        <p className={styles.text}>Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
