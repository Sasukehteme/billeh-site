import Image from "next/image"

export type Client = {
    index: number
    image: string
    name: string
    channelType: string
    subs: number
    views: number
}

const ClientImage: React.FC<Client> = (props) => {
    const { image, name, channelType, subs, views } = props

    return(
        <div className="group relative rounded-lg">
            
            <div className="transition-all ease-in-out duration-500 bg-black/30 opacity-0 absolute min-w-full max-w-full max-h-0 rounded-lg -bottom-20 group-hover:-translate-y-20 group-hover:opacity-100 group-hover:max-h-full backdrop-blur-sm p-4">
                <h1 className="text-xl text-bold ">{name}</h1>
                <h1 className="text-sm font-light pb-4">{channelType}</h1>
                <div className="flex flex-row">
                    <Image
                        src="/user.svg"
                        alt="Subscrubers"
                        className=""
                        width={25}
                        height={25}
                        priority
                    />
                    <h1 className="text-lg text-normal pl-5 pd-2">{subs} Subs</h1>
                </div>
                <div className="flex flex-row">
                    <Image
                        src="/eye.svg"
                        alt="Viewers"
                        className=""
                        width={25}
                        height={25}
                        priority
                    />
                    <h1 className="text-lg text-normal pl-5">{views} Views</h1>
                </div>

            </div>
            <Image
                src={image}
                alt="Logo"
                className="rounded-lg"
                width={300}
                height={300}
                priority
            />
        </div>
    );
}

export default ClientImage