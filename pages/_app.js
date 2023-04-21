import '@/styles/globals.scss'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })



export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Sexy Bark</title>
        <meta name="title" content={"Sexy Bark"} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=9" />
        <meta httpEquiv="Content-language" content="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={"We connect dog lovers to find friends for their furry friends"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://wwww.sexybark.com`} />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={"Sexy Bark"} />
        <meta name="og:description" property="og:description" content={"We connect dog lovers to find friends for their furry friends"} />
        <meta property="og:site_name" content="CW1" />
        <meta property="og:url" content={`https://wwww.sexybark.com`} />
        <meta property="og:image" content={`http://i.ibb.co/64dCSRN/pspecter-selfies-of-attractive-swedish-girls-and-their-dogs-06509181-f258-4453-a9a5-f7168879750a.png`} />
        <meta property="og:image:secure_url" content={`https://i.ibb.co/64dCSRN/pspecter-selfies-of-attractive-swedish-girls-and-their-dogs-06509181-f258-4453-a9a5-f7168879750a.png`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={"Sexy Bark"} />
        <meta name="twitter:description" content={"We connect dog lovers to find friends for their furry friends"} />
        <meta name="twitter:site" content={`https://wwww.sexybark.com`} />
        <meta name="twitter:creator" content="CW1" />
        <meta name="twitter:image" content={`https://i.ibb.co/64dCSRN/pspecter-selfies-of-attractive-swedish-girls-and-their-dogs-06509181-f258-4453-a9a5-f7168879750a.png`} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        id="clarit"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(c,l,a,r,i,t,y){
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gpvml0rpoi"); `}} />

      <Component {...pageProps} />
    </main>
  )
}
