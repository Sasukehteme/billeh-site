import Link from "next/link";
import AOSComponent from "./AOSComponent";


export default function Contact() {
    return(
        <AOSComponent>
            <div className="bg-zinc-800 rounded-lg p-12 flex flex-col justify-center" data-aos="fade-up">
                <h1 className="text-center text-4xl font-bold pb-8">Want to know more?</h1>
                <h2 className="text-center text-2xl font-semibold pb-4">Reach out below!</h2>
                <div className="min-w-full flex flex-row justify-center">
                    <Link href={"mailto:jackwirata@gmail.com"} className="text-center bg-cyan-500 rounded-md border-2 border-cyan-500 hover:bg-opacity-0 transition ease-in-out px-14 py-3 font-semibold text-lg">Contact Us</Link>
                </div>
            </div>
        </AOSComponent>
    );
}