import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from 'react';

export default function ButtonTopPage() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window?.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handlerClickToTopPage = () => {
        window.scrollTo(0,0);
    }

    return (
        <>
        {offset > 800 &&
            <div className="d-flex fixed right-5 bottom-12 z-[99988] flex-auto p-2 bg-yellow border-black border-4 rounded-full max-w-[100px] cursor-pointer" 
                onClick={handlerClickToTopPage}>
                <FaArrowUp className="text-white text-[20px]"/>
            </div>
        }
        </>
    )
}