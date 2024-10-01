import InfoSnippet from "./InfoSnippet";
import { InfoSnippetType } from "./InfoSnippet";

let INFOSNIPPETS: Array<InfoSnippetType> = [
    {
        index: 1,
        image: "/dollar.png",
        title: "Sponsorships",
        description: "At High Management, we elevate your brand with tailored sponsorship opportunities that maximize visibility and impact."
    },
    {
        index: 2,
        image: "/user.svg",
        title: "Client-Led Solutions",
        description: "Clients make the decisions, and we provide the support to help them achieve their goals."
    },
    {
        index: 3,
        image: "/stock.png",
        title: "Market Intelligence",
        description: "High Management provides elevated market insights, helping you stay ahead in a competitive landscape."
    },
    {
        index: 4,
        image: "/eye.svg",
        title: "Insight Development",
        description: "We develop high-quality insights that guide your strategic decisions and fuel your growth."
    }
]

export default function InfoBlock() {
    return (
        <>
            <div className="flex flex-row">
                {INFOSNIPPETS.map((info: InfoSnippetType) => (
                    <div key={info.index} className="p-2 basis-1/4">
                        <InfoSnippet index={info.index} image={info.image} title={info.title} description={info.description}/>
                    </div>
                ))}    
            </div>
        </>
    )
}