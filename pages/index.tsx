import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const color = "rgb(" + (count % 255) + ", " + 150 + ", " + 150 + ")";

  return (
    <div className={styles.container} style={{ background: `${color}` }}>
      <Head>
        <title>Linwood's Website</title>
      </Head>
      <body>
        <h1>Thank you Theo for teaching me this stuff</h1>
        <h1>Hello Sam, see you soon!</h1>
        <h1>Hey Julia!</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 5)}>Increase</button>
      </body>
    </div>
  );
};

export default Home;
