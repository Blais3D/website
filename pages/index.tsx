import { link } from "fs";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { brotliDecompressSync } from "zlib";

const MyButton: React.FC<{ text: String; color: string; link: any }> = (
  props
) => {
  return (
    <button style={{ background: props.color }} onClick={props.link}>
      {props.text}
    </button>
  );
};

const Home: NextPage = () => {
  return (
    <html className="bg-black">
      <head>
        <title>Welcome!</title>
      </head>
      <body>
        <div>
          <div>
            <img src="/BlaisLogo.png" alt="logo"></img>
            <h1>Blais</h1>
          </div>
          <div>
            <button>Blog</button>
            <button>Portfolio</button>
            <button>Socials</button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Home;
