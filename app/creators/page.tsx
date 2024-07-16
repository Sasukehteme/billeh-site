import { CLIENTS } from "../data/clients";
import { Client } from "../data/clients";
import ClientImage from "../ui/ClientImage";
import Contact from "../ui/Contact";

export default function Creators() {
    return (
        <main>
            <div className="flex flex-col py-8 bg-gradient-to-r from-cyan-500 to-blue-500">
                <h1 className="text-center text-5xl font-bold">Creators</h1>
                <div className="flex flex-row flex-wrap min-[1610px]:px-80 px-8 justify-center">
                    {CLIENTS.map((client: Client) => (
                        <div key={client.index} className="p-8">
                            <div className="overflow-hidden">
                                <ClientImage index={client.index} image={client.image} name={client.name} channelType={client.channelType} subs={client.subs} views={client.views}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="min-w-full bg-gradient-to-r from-cyan-500 to-blue-500 min-[1610px]:px-80 px-8 py-24">
                    <Contact/>
                </div>
            </div>
        </main>
    );
}