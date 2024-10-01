import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './ui/EmblaCarousel'
import ParticlesBG from "./ui/ParticlesBG";
import Contact from "./ui/Contact";
import Link from "next/link";
import { CLIENTS } from "./data/clients"
import InfoBlock from "./ui/InfoBlock";

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="min-w-full relative">
        <div className="min-w-full min-h-full absolute 2xl:visible invisible">
            <ParticlesBG />
        </div>
        <div className="min-[1610px]:flex min-[1610px]:flex-row min-[1610px]:flex-wrap min-[1610px]:justify-between min-w-full min-[1610px]:px-80 px-8 py-4">
          <div className="content-center">
            <h1 className="text-5xl font-bold text-left">HIGH MANAGEMENT</h1>
            <h1 className="text-3xl font-light text-left">Elevating your social presence!</h1>
          </div>
          <div className="flex justify-center">
            <Image
                  src="/logo.png"
                  alt="Logo"
                  className=""
                  width={400}
                  height={400}
                  priority
            />
          </div>
        </div>
      </div>
      <div className="min-w-full bg-zinc-800 flex flex-col justify-center py-10 min-[1610px]:px-80 px-8">
        <InfoBlock/>
      </div>
      <div className="min-w-full bg-gradient-to-r from-cyan-500 to-blue-500 min-[1610px]:px-80 px-8 py-24">
        <Contact/>
      </div>
    </main>
  );
}
