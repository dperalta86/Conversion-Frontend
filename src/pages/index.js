// pages/index.js
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ConversionForm from '../components/ConversionForm';

export default function Home() {
  return (
      <div>
          <Head>
              <title>Conversor Numerico</title>
              <meta name="description" content="Conversor de números entre bases binaria, octal, decimal y hexadecimal"/>
              <link rel="icon" href="/favicon.ico"/>
              <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <Layout>
              <Header />
              <ConversionForm />
          </Layout>
      </div>
  );
}
