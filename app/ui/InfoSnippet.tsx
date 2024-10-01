import Image from "next/image"
export type InfoSnippetType= {
    index: number
    image: string
    title: string
    description: string
}

export default function InfoSnippet(props: InfoSnippetType) {
    const {index, image, title, description} = props

    return(
        <div className="text-balance">
            <Image
                  src={image}
                  alt="Logo"
                  className=""
                  width={40}
                  height={40}
                  priority
            />
            <div className="font-bold text-xl py-4">{title}</div>
            <div className="font-light text-gray-400">{description}</div>
        </div>
    )
}