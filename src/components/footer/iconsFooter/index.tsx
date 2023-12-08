
import { FaFacebookSquare, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function IconsFooter() {
    return (
        <div className='flex-row-reverse flex-nowrap pt-2 text-center inline-flex mb-6'>
            <a href="mailto:contato@mastergym.com.br" rel="noopener noreferrer"
                title="Master Gym E-mail" className="text-[42px] pr-2 max-[1200px]:text-[25px]" target="_blank">
                <IoIosMail className="text-yellow hover:text-white"/>
            </a>

            <a href="https://twitter.com.br" rel="noopener noreferrer"
                title="Master Gym Twitter" className="text-[42px] pr-2 max-[1200px]:text-[25px]" target="_blank">
                <FaTwitter className="text-yellow hover:text-white"/>
            </a>

            <a href="https://whatsapp.com.br/90903912312" rel="noopener noreferrer"
                title="Master Gym Whatsapp" className="text-[42px] pr-2 max-[1200px]:text-[25px]" target="_blank">
                <FaWhatsapp className="text-yellow hover:text-white"/>
            </a>

            <a href="https://instagram.com.br" rel="noopener noreferrer"
                title="Master Gym Instagram" className="text-[42px] pr-2 max-[1200px]:text-[25px]" target="_blank">
                <FaInstagram className="text-yellow hover:text-white"/>
            </a>
            
            <a href="https://facebook.com.br" rel="noopener noreferrer"
                title="Master Gym Facebook" className="text-[42px] pr-2 max-[1200px]:text-[25px]" target="_blank">
                <FaFacebookSquare className="text-yellow hover:text-white"/>
            </a>
        </div>
    )
}