import { IoIosSend } from 'react-icons/io';
import logoGym from '../../assets/images/icons/logo.png';
import IconsFooter from "./iconsFooter";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="w-full flex justify-center items-center pt-4 pb-4">
                <div className='text-center flex flex-row'>
                    <img src={logoGym} alt="Logo Master Gym Academia" className='max-w-[5em] w-[100%]'/>
                    <h1 className="text-[60px] max-[1200px]:text-[45px]">Master Gym</h1>
                </div>
            </div>
            <div className="grid grid-cols-8 text-sm max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:ml-2 max-[1200px]:mr-2">
                <div className="col-span-1"></div>
                <div className="col-span-2 flex justify-center max-[1200px]:justify-left">
                    <ul className='text-left max-[1200px]:flex max-[1200px]:flex-row'>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Home</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Sobre</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Nosso Espaço</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Aulas</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Planos</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Contato</a>
                        </li>
                        <li className="mb-[13px] ml-2 hover:text-yellow">
                            <a href="#">Localização</a>
                        </li>
                    </ul>
                </div>
                <div className='col-span-2 flex flex-col justify-center text-sm mt-[-4em] ml-[20%] max-[1200px]:flex 
                    max-[1200px]:flex-row-reverse max-[1200px]:mt-[1em] max-[1200px]:m-[5%]'>
                    <div className='pb-6 text-left ml-2'>
                        <h4 className='font-bold'>Contato</h4>
                        <p>contato@mastergym.com.br</p>
                        <p>(16) 994654-65456</p>
                        <p>(16) 32654-65456</p>
                    </div>
                    <div className='text-left ml-2'>
                        <h4 className='font-bold'>Horário de atendimento</h4>
                        <p>Segunda à Sexta: 07:00hrs às 22:00hrs</p>
                        <p>Sabádos: 09:00hrs às 16:00hrs</p>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center ml-[20%] max-[1200px]:ml-[0%]">
                    <ul className='text-left'>
                        <li className="mb-[13px] ml-2 text-sm hover:text-yellow">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="mb-[13px] ml-2 text-sm hover:text-yellow">
                            <a href="#">SiteMap</a>
                        </li>
                        <li className="mb-[13px] ml-2 text-sm hover:text-yellow">
                            <a href="#">Politica de Privacidade</a>
                        </li>
                        <li className="mb-[13px] ml-2 text-sm hover:text-yellow">
                            <a href="#">Politica de cookies</a>
                        </li>
                        <li className="mb-[13px] text-sm">
                            <p className='ml-2'>NewsLetter</p>
                            <div className='flex flex-wrap-reverse justify-center h-10 mt-[8px]'>
                                <input 
                                    type="mail" 
                                    name='newsletter' 
                                    placeholder='Inscreva-se' 
                                    className='text-black p-2 h-[100%] w-[80%] rounded-l-lg'/>
                                <button className='bg-gray-200 text-white h-[100%] p-2 mt-4 rounded-r-lg'>
                                    <IoIosSend/>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-1"></div>
            <IconsFooter/>
            <div className="bg-gray-200 text-white text-center  max-[1200px]:p-2">
                <span className="text-[15px] max-[1200px]:text-[10px]">Copyright © 2023 Fransérgio de Amorim Mota - Todos os direitos reservados</span>
            </div>
        </footer>
    );
}