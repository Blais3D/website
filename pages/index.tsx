import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  let color = "black";
  if (count > 5) {
    color = "red";
  }

  const color2 = count > 5 ? "red" : "black";

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Avery</title>
      </Head>
      <h1>Hello Avery Click The Button</h1>
      <h2>{count}</h2>
      <button
        style={{ border: `2px solid ${color2}` }}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Home;
