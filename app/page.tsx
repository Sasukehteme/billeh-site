import Image from "next/image";
import Link from "next/link";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './ui/EmblaCarousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-600">
      <div className="flex flex-col min-w-full bg-zinc-800 md:px-80 px-8">
        <div className="flex flex-row justify-between">
          <Image
              src="/websitelogo.png"
              alt="Logo"
              className=""
              width={100}
              height={100}
              priority
          />
          <div className="flex flex-row flex-wrap content-center">
            <Link href="" className="">Home</Link>
            <Link href="" className="pl-8">Creators</Link>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row md:flex-wrap md:justify-between min-w-full md:px-80 px-8 py-10">
        <div className="content-center">
          <h1 className="text-4xl font-bold text-center">Elevating your social presence!</h1>
        </div>
        <div className="flex justify-center">
          <Image
                src="/websitelogo.png"
                alt="Logo"
                className=""
                width={400}
                height={400}
                priority
          />
        </div>
      </div>
      <div className="min-w-full bg-zinc-800 flex flex-col justify-center">
        <div>
          <h1 className="text-4xl font-bold text-center py-10">Our Creators</h1>
        </div>
        <div className="md:px-80 px-8">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </main>
  );
}
