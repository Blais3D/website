import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Avery</title>
      </Head>
      {count}
      <button onClick={()=> setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Home
