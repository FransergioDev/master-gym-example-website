import { FaWhatsapp } from "react-icons/fa";

export default function ButtonWhatsapp() {
    return (
        <div className="d-flex fixed right-1 bottom-24 mb-2 z-[99988] flex-auto p-4 bg-yellow border-black border-4 rounded-full max-w-[100px] cursor-pointer">
            <FaWhatsapp className="text-white text-[35px]"/>
        </div>
    )
}