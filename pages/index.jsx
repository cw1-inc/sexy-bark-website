import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
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
        <meta property="og:image" content={`https://i.ibb.co/64dCSRN/pspecter-selfies-of-attractive-swedish-girls-and-their-dogs-06509181-f258-4453-a9a5-f7168879750a.png`} />

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
      <main className={""}>

        <section className="hero">


          <div className="overlay body">
            <div className="container h-100 w-100 ">
              <div className="w-100 d-flex justify-content-between element align-items-start w-100">
                <img src="/img/logo/logo_full_white.svg" alt="Sexy Bark | cw1" width="150px" style={{ objectFit: "contain", maxHeight: 100, transform: "translateX(-15px)" }} />
                <Link href="/contact" className="pt-5">
                  <h6 className="pointer">Contact</h6>
                </Link>
              </div>
              <div className="element">
                <h1>Furry lovers united.</h1>
                <p>Download at</p>
                <div className="d-flex">
                  <a href="https://apps.apple.com/us/app/sexy-bark/id6447242746">
                    <img src="/img/logo/appstore.svg" alt="Sexy Bark | cw1" width="170px" style={{ objectFit: "contain", maxHeight: 100, cursor: "pointer" }} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.cw1.sexybark">
                    <img src="/img/logo/playstore.svg" alt="Sexy Bark | cw1" width="200px" style={{ objectFit: "contain", maxHeight: 100, marginLeft: 30, cursor: "pointer" }} />
                  </a>
                </div>
              </div>
              <div className="element">
              </div>
            </div>
          </div>

          <img src="/img/img/a1.webp" alt="sexy bark meet friends for your furry friend cw1" width="100%" style={{ objectFit: "cover" }} />


        </section>


        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-6 my-auto">
                <h2 className="color4 fw-bold">An app to make new furry <u> friends.</u></h2>
                <p>We love dogs, and we love them to have new friends. </p>
              </div>
              <div className="col-12 col-md-6  ">
                <img src="/img/img/65969.png" alt="Sexy Bark | easy as a bark" width="75%" style={{ objectFit: "contain", cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-dark">
          <div className="container py-5">
            <h2 className="color4 fw-bold text-center mb-5">Easy as a bark</h2>
            <div className="row">
              <div className="col-md-4 text-end">
                <h2 className="text-white fw-bold">Like</h2>
                <h2 className="text-white fw-bold">Match</h2>
                <h2 className="text-white fw-bold">Enjoy</h2>
                <h2 className="text-white fw-bold">Discover</h2>
                <a href="https://apps.apple.com/us/app/sexy-bark/id6447242746">
                  <img src="/img/logo/appstore.svg" alt="Sexy Bark | cw1" width="170px" style={{ objectFit: "contain", maxHeight: 100, cursor: "pointer" }} />
                </a>
              </div>

              <div className="col-12 col-md-4  ">
                <img src="/img/img/65970.png" alt="like, match, talk, meet" width="100%" style={{ objectFit: "contain", cursor: "pointer" }} />
              </div>
              <div className="col-md-4">
                <h2 className=" text-white fw-bold">Talk</h2>
                <h2 className=" text-white fw-bold">Meet</h2>
                <h2 className=" text-white fw-bold">Connect</h2>
                <h2 className=" text-white fw-bold">Have fun</h2>
                <a href="https://play.google.com/store/apps/details?id=com.cw1.sexybark">
                  <img src="/img/logo/playstore.svg" alt="Sexy Bark | cw1" width="200px" style={{ objectFit: "contain", maxHeight: 100, marginLeft: 30, cursor: "pointer" }} />
                </a>
              </div>

            </div>
          </div>
        </section>


        <Footer />

      </main >
    </>
  )
}
