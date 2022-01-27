import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllExhibitionsRequest } from "../Redux/action";
import Container from "../Components/allExhibitions/Container";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExhibitionsRequest());
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Art Technologies</title>
        <meta name="description" content="Art Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </div>
  );
};

export default Home;
