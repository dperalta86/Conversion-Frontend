// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ConversionForm from '../components/ConversionForm';

export default function Home() {
  return (
      <Layout>
        <Header />
        <ConversionForm />
      </Layout>
  );
}
