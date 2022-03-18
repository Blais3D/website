import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";
import styles from "../styles/Home.module.css";

const ColorButton: React.FC<{ count: number; name: string }> = (props) => {
  const [value, setValue] = useState(props.count);
  return (
    <button className={styles.MyButton} onClick={() => setValue(value + 10)}>
      {props.name} Has a Value of: {value}
    </button>
  );
};

const Home: NextPage = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  return (
    <html>
      <body>
        <div style={{ background: "rgb(" + r + "," + g + "," + b + ")" }}>
          This is the color you have made!
        </div>
        <div className={styles.body}>
          <ColorButton count={r} name={"Red"}></ColorButton>
          <ColorButton count={g} name={"Blue"}></ColorButton>
          <ColorButton count={b} name={"Green"}></ColorButton>
        </div>
      </body>
    </html>
  );
};

export default Home;
