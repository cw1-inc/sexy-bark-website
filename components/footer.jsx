import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

export default function Footer() {

    const router = useRouter()



    return (
        <div className="bg-dark text-white py-3">
            <div className="container  pb-4">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex my-auto">
                        <h2 style={{ fontSize: 20 }} className="fw-bold">Get the app</h2>

                        <div>
                            <img src="/img/logo/appstore.svg" alt="Sexy Bark | cw1" width="85px" style={{ objectFit: "contain", maxHeight: 100, cursor: "pointer", marginLeft: 10, }} />
                            <a href="https://play.google.com/store/apps/details?id=com.cw1.sexybark">
                                <img src="/img/logo/playstore.svg" alt="Sexy Bark | cw1" width="100px" style={{ objectFit: "contain", maxHeight: 100, marginLeft: 10, cursor: "pointer" }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end my-auto">
                        <Image src={"/img/logo/logo_full_white.svg"} alt="cw1" width={175} height={50}></Image>
                    </div>
                    <div className="col-12 mt-3" >
                        <p style={{fontSize: 12}}> Hey there, furry friends! Are you a single doggo looking to sniff out some love? Then you need to be on Sexybark, the best free dating app for dogs. SexyBark is the pawfect place to find your next best match.</p>

                        <p style={{fontSize: 12}}>Gone are the days of sniffing butts in the park to find a mate, with SexyBark, the world’s most popular free dating app for dogs, you have millions of other pooches at your pawtips, and they’re all ready to meet someone like you. Whether you’re a big dog or a little dog, a purebred or a mutt, SexyBark is here to get your tail wagging.</p>

                        <p style={{fontSize: 12}}>There really is something for every pup on SexyBark. Looking for a long-term relationship? You’ve got it. Want to make some furry friends online? Say no more. Just started puppy school and want to make the most of your experience? SexyBark got you covered. SexyBark isn’t your average dating app for dogs; it’s the most diverse app, where dogs of all breeds and backgrounds are invited to make connections, memories and everything in between. So, let’s get those paws liking!</p>
                    </div>
                </div>

            </div>
            <div className="container-fluid px-md-5 d-flex justify-content-between align-items-center border-top pt-3" style={{ fontSize: 12 }}>
                <div className="d-flex justify-content-center pointer">
                    <span className="pointer pe-3" onClick={() => router.push("/legal/privacy-policy")}>Contact</span>
                    <span className="pointer pe-3" onClick={() => router.push("/legal/privacy-policy")}>Privacy Policy</span>
                    {/* <span className="pointer ps-3 border-start" onClick={() => router.push("/contact")}>Contact</span> */}
                </div>
                <span>@ 2023 <a href="https://www.cw1.com"> CW1 Inc.</a> All rights reserved</span>

            </div>
        </div>
    )
};