import Image from 'next/image'
import React from 'react'




export default function Header({ backgroundColor = "transparent", position = "relative" }) {


    return (
        <header style={{ backgroundColor: backgroundColor, position: position }}>


            <Image src={"/img/logo/logo_full_white.svg"} alt="cw1" width={350} height={100}></Image>


            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    {/* <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li> */}
                    <li><a href="#">Download</a></li>
                </ul>
            </nav>
        </header>
    )
}