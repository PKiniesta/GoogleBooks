/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../style/fontawesome';
class MyApp extends App {
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Books Google</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
