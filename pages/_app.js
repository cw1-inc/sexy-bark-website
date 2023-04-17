import '@/styles/globals.scss'

import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })



export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
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
