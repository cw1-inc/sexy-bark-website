import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

export default function Footer() {

    const router = useRouter()



    return (
        <div className="bg-dark text-white py-3">
            <div className="container  pb-4">
                <Image src={"/img/logo/logo_full_white.svg"} alt="cw1" width={350} height={100}></Image>
                <div>
                    <img src="/img/logo/appstore.svg" alt="Sexy Bark | cw1" width="170px" style={{ objectFit: "contain", maxHeight: 100, cursor: "pointer" }} />
                    <img src="/img/logo/playstore.svg" alt="Sexy Bark | cw1" width="200px" style={{ objectFit: "contain", maxHeight: 100, marginLeft: 30, cursor: "pointer" }} />
                </div>
            </div>
            <div className="container-fluid px-md-5 d-flex justify-content-between align-items-center border-top pt-3" style={{ fontSize: 12 }}>
                <span>@ 2023 <a href="https://www.cw1.com"> CW1 Inc.</a> All rights reserved</span>
                <div className="d-flex justify-content-center">
                    <span className="pointer px-3" onClick={() => router.push("/legal/privacy-policy")}>Privacy Policy</span>
                    {/* <span className="pointer ps-3 border-start" onClick={() => router.push("/contact")}>Contact</span> */}
                </div>

            </div>
        </div>
    )
};