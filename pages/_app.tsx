import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>HN - elijahcobb.com</title>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1,user-scalable=no,viewport-fit=cover" />
      <meta name="description" content="A Hacker News Clone" />
      <meta name="theme-color" content="#ff6600" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/icon-256x256.png"></link>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <script async src="https://cdn.splitbee.io/sb.js" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
