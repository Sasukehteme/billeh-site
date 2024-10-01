'use client'
import Image from "next/image"
import AOSComponent from "./AOSComponent"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function LargeInfoBoxWithImage() {
    return(
        <AOSComponent>
            <div className="flex flex-row px-2 min-[1610px]:justify-between justify-center flex-wrap">
                <div className="flex flex-col min-[1610px]:basis-1/2" data-aos="fade-right">
                    <div>
                        <h1 className="font-bold text-3xl pb-10">Your Success, Our Mission!</h1>
                    </div>
                    <div>
                        <h1 className="font-light text-gray-400 text-justify pb-10">At High Management, we elevate content creators by offering a comprehensive range of services from our Australian-based agency. Our primary focus is on securing high-impact sponsorships that enhance brand visibility while aligning with our creators unique voices. We also provide expert editing services for videos, YouTube Shorts, TikTok, and more, ensuring that content is engaging and polished. Additionally, our market intelligence and insight development services deliver valuable analytics, while our audience targeting strategies help campaigns reach the right viewers. With High Management, content creators can soar to new heights in the digital landscape.</h1>
                    </div>
                </div>
                <div className="" data-aos="fade-left">
                    <Image
                        src="/placeholder16x9.png"
                        alt="Logo"
                        className=""
                        width={500}
                        height={200}
                        priority
                    />
                </div>
            </div>
        </AOSComponent>

    )
}