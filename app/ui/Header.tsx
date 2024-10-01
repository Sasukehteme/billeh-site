import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col min-w-full bg-zinc-800 min-[1000px]:px-80 px-8">
          <div className="flex flex-row justify-between">
            <Link href="/">
              <Image
                  src="/logo.png"
                  alt="Logo"
                  className=""
                  width={100}
                  height={100}
                  priority
              />
            </Link>
            <div className="flex flex-row flex-wrap content-center">
              <Link href="/" className="">Home</Link>
              {/* <Link href="/creators" className="pl-8">Creators</Link> */}
            </div>
          </div>
        </div>
    );
}