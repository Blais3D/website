import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";
import styles from "../styles/Home.module.css";

const ColorButton: React.FC<{ count: number; func: any; name: String }> = (
  props
) => {
  return (
    <button
      className={styles.MyButton}
      onMouseDown={() => props.func(props.count + 4)}
    >
      The Value of {props.name} is: {props.count}
    </button>
  );
};

const Home: NextPage = () => {
  const [r, setr] = useState(0);
  const [g, setg] = useState(0);
  const [b, setb] = useState(0);

  return (
    <html>
      <body>
        <div style={{ background: "rgb(" + r + "," + g + "," + b + ")" }}>
          This is the color you have made!
        </div>
        <div className={styles.body}>
          <ColorButton count={r} func={setr} name={"Red"}></ColorButton>
          <ColorButton count={g} func={setg} name={"Green"}></ColorButton>
          <ColorButton count={b} func={setb} name={"Blue"}></ColorButton>
        </div>
      </body>
    </html>
  );
};
