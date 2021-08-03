import React from "react";

import Vik from "../assets/vik.jpg";

import { Image } from "../layouts";

import { Layout } from "../components";

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <div>
      <Image
        src={Vik}
        style={{ width: "50%" }}
        alt="A picture of me!"
        key="vikram-headshot-1"
      />
    </div>
    <br />
    <p>
      My name is Vikram Venkataramanan. I am a software developer based in
      Toronto. After finishing up my CompSci degree, I dabbled around a bit
      writing low-level code for high-performance software defined radios.
      Nowadays, I spend my time constructing and maintaining ecobee’s
      subscription platform.
    </p>
  </Layout>
);

export default IndexPage;
