import Image from 'next/image'
import React from 'react'




export default function Header({ backgroundColor = "transparent", position = "relative" }) {


    return (
        <header style={{ backgroundColor: backgroundColor, position: position }}>


            <Image src={"/img/logo/logo_full_white.svg"} alt="cw1" width={350} height={100}></Image>
            <h3>Contact</h3>

            
        </header>
    )
}