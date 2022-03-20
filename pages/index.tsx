import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <html className={styles.html}>
      <head>
        <title>Welcome!</title>
      </head>
      <body className={styles.bodyHeader}>
        <img src="public\BlaisLogo.png" alt="logo"></img>
      </body>
      <body className={styles.body}>
        <h1 className={styles.h1}>Welcome To Blais.gg!</h1>
      </body>
    </html>
  );
};

export default Home;
