import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col min-w-full bg-zinc-800 min-[1000px]:px-80 px-8">
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
              <h1>©2024 All rights reserved</h1>
            </div>
          </div>
        </div>
    );
}