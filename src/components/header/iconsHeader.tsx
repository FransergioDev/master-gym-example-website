
import { FaFacebookSquare, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function IconsHeader() {
    return (
        <div className='absolute top-0 left-0 right-0 h-[43px] bg-black flex flex-row-reverse flex-nowrap pt-2'>
            <a href="mailto:contato@mastergym.com.br" rel="noopener noreferrer"
                title="Master Gym E-mail" className="text-[23.91px] pr-2" target="_blank">
                <IoIosMail className="text-yellow hover:text-white"/>
            </a>

            <a href="https://twitter.com.br" rel="noopener noreferrer"
                title="Master Gym Twitter" className="text-[23.91px] pr-2" target="_blank">
                <FaTwitter className="text-yellow hover:text-white"/>
            </a>

            <a href="https://instagram.com.br" rel="noopener noreferrer"
                title="Master Gym Instagram" className="text-[23.91px] pr-2" target="_blank">
                <FaWhatsapp className="text-yellow hover:text-white"/>
            </a>

            <a href="https://instagram.com.br" rel="noopener noreferrer"
                title="Master Gym Instagram" className="text-[23.91px] pr-2" target="_blank">
                <FaInstagram className="text-yellow hover:text-white"/>
            </a>
            
            <a href="https://facebook.com.br" rel="noopener noreferrer"
                title="Master Gym Facebook" className="text-[23.91px] pr-2" target="_blank">
                <FaFacebookSquare className="text-yellow hover:text-white"/>
            </a>
        </div>
    )
}