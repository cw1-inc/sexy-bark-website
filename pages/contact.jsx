import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




export default function Contact() {


    return (
        <section className="d-flex flex-column min-vh-100">
            <Head>
                <title>Sexy Bark</title>
                <meta name="description" content="Contact us here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="border-bottom">
                <Link href="/" className="pointer">
                    <Image src={"/img/logo/logo_full_black.svg"} alt="cw1" width={175} height={50}></Image>
                </Link>


                <nav className="menu text-dark">
                    <ul>
                        <li><a href="#">Home</a></li>
                        {/* <li><a href="#">Download</a></li> */}
                    </ul>
                </nav>
            </header>

            <section style={{ flex: 1 }} className="contact">

                <div className="container py-5">

                    <h1 style={{ fontSize: 12 }}>Legal info about SexyBark</h1>
                    <h2>Contact us</h2>
                    <p>Got something you’d like to talk about? Contact us or email us, and we promise to get back to you as soon as we can.</p>
                    <h3>Provider information</h3>
                    <p>For members who live in the European Union:</p>
                    <br />
                    <p>CW1 AB / CW1 Inc <br />
                        Company no 559250-3410 <br />
                        Torggatan 8<br />
                        411 05, Gothenburg <br />
                        Sweden<br /><br />
                        Legal Representant: Pedro Miguel
                    </p>

                    <p>For members who live outside the European Union:</p>
                    <br />
                    <p>CW1 Inc <br />
                        <br />
                        Tower 5, fl.17 Rockewell, <br />
                        1050 Makati, Metro Manila <br />
                        Philippines<br /><br />
                        Legal Representant: Faith Espanola
                    </p>

                
                    <p>You can view SexyBarks Terms of Use <Link href="/legal/privacy-policy">here.</Link></p>
<br />
                    <h3>Help/support</h3>
                    <p>For all things technical and app-related.</p>
                    <p>sexybark@cw1.com or reach us at +46 (0) 8 21 21 98</p>


                </div>


            </section>

            <Footer />

        </section>
    )
}