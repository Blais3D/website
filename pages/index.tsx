import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const color =
    "rgb(" + (red % 255) + ", " + (green % 255) + ", " + (blue % 255) + ")";

  return (
    <div className={styles.container} style={{ background: `${color}` }}>
      <Head>
        <title>Linwood's Website</title>
      </Head>
      <body>
        <h1>Thank you Theo for teaching me this stuff</h1>
        <h1>Hello Sam, see you soon!</h1>
        <h1>Hey Julia!</h1>
        <h2>Percent red value: {(red % 255) / 255}</h2>
        <h2>Percent green value: {(green % 255) / 255}</h2>
        <h2>Percent blue value: {(blue % 255) / 255}</h2>
        <button onClick={() => setRed(red + 5)}>Increase Red</button>
        <button onClick={() => setGreen(green + 5)}>Increase Green</button>
        <button onClick={() => setBlue(blue + 5)}>Increase Blue</button>
      </body>
    </div>
  );
};

export default Home;
