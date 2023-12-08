import { useEffect, useRef, useState } from "react";
import bannerImage1 from "../../assets/images/ilustracoes/scott-webb-Vn39uEkX00s-unsplash 1.png";
import bannerImage2 from "../../assets/images/ilustracoes/scott-webb-Vn39uEkX00s-unsplash 2.png";
import bannerImage3 from "../../assets/images/ilustracoes/scott-webb-Vn39uEkX00s-unsplash 3.png";
import bannerImage4 from "../../assets/images/ilustracoes/scott-webb-Vn39uEkX00s-unsplash 4.png";

const bannerSettings = {
    time: 5000,
}
export default function Banner() {
    const timer = useRef(0);
    const [indexImage, setIndexImage] = useState(0);
    const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];
    
    useEffect(() => {

        const timeOutBannerImage = () => {
            timer.current = setTimeout(() => {
                if (indexImage < (images.length - 1)) setIndexImage(indexImage + 1);
                else setIndexImage(0);
            }, bannerSettings.time);
        }

        timeOutBannerImage()

        return () => { 
            if (timer.current) clearTimeout(timer.current)
        };
    }, [images.length, indexImage])

    const handlerItemCarrousel = (index: number) => {
        setIndexImage(index);
    }

    return (
        <div className="mt-32 w-full relative">
            <img src={images[indexImage]} alt="" className="banner-image w-full h-auto max-h-[798px] transition-all ease-in-out delay-150" />
            <ul className="absolute flex justify-center gap-x-1.5 bottom-2.5 w-[100%]">
                {images.map((_image, index) => (
                    <li 
                        key={`banner-controller-${index}`} 
                        id={`banner-controller-${index}`} 
                        className={`rounded-full w-[1em] h-[1em] cursor-pointer ${index !== indexImage ? "bg-gray-100" : "bg-gray-200"}`}
                        onClick={() => handlerItemCarrousel(index)}>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}