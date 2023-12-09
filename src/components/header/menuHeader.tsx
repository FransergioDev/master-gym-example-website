import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import helpers from '../../helpers';

export default function MenuHeader() {
    const [show, setShow] = useState(false);
    const navMenuRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const handlerNavMenu = () => {
        const classNameNavMenu = "nav-menu";
        const toggle = !show;

        setShow(toggle);

        if (navMenuRef.current?.classList) {
            if (toggle)
                navMenuRef.current?.classList.add(classNameNavMenu)
            else
                navMenuRef.current?.classList.remove(classNameNavMenu)
        }
    }

    return (
        <>
            <button className="nav-menu-button hidden" onClick={handlerNavMenu}>
                <GiHamburgerMenu className="text-black text-[2em] hover:text-white"/>
            </button>
            <div ref={navMenuRef} className="text-white flex flex-wrap items-center justify-between text-[15px] max-[1200px]:hidden lg:text-[18px] xl:text-[20px] 2xl:text-[25px] font-bold">
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e)}>
                    Home
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e, 'about')}>
                    Sobre
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e, 'our-space')}>
                    Nosso Espaço
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e, 'classe')}>
                    Aulas
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e,'plans')}>
                    Planos
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e,'contact')}>
                    Contato
                </a>
                <a href="#" className="p-2 hover:text-black" onClick={(e) => helpers.handlerClickAnchorLink(e, 'location')}>
                    Localização
                </a>
            </div>
        </>
    )
}