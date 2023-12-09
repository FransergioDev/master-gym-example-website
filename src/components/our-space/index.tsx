import image1 from '../../assets/images/espaco/Rectangle 34.png';
import image2 from '../../assets/images/espaco/Rectangle 36.png';
import image3 from '../../assets/images/espaco/Rectangle 38.png';
import image4 from '../../assets/images/espaco/Rectangle 37.png';
import image5 from '../../assets/images/espaco/Rectangle 39.png';
import image6 from '../../assets/images/espaco/Rectangle 35.png';

export default function OurSpace() {
    return (
        <section className='text-left relative h-[100%]' id="our-space">
            <h2 className='font-extrabold text-4xl mb-4'>Nosso espaço</h2>
            <div className='grid grid-row gap-x-8 gap-y-[2em] bg-yellow z-0 rounded-md relative content-between p-2 pt-8'>
                <div className='bg-white w-[20%] left-0 h-[100%] z-1 absolute'></div>
                <div className='bg-black w-[75%] left-0 mt-[2.5em] h-[95%] z-2 absolute rounded-md'></div>
                <div className="grid grid-cols-2 z-[88888] mt-8">
                    <img src={image1} alt='' className='col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
                <div className="grid grid-cols-2 z-[88888]">
                    <img src={image2} alt='' className='col-start-2 col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
                <div className="grid grid-cols-2 z-[88888]">
                    <img src={image3} alt='' className='col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
                <div className="grid grid-cols-2 z-[88888]">
                    <img src={image4} alt='' className='col-start-2 col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
                <div className="grid grid-cols-2 z-[88888]">
                    <img src={image5} alt='' className='col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
                <div className="grid grid-cols-2 z-[88888]">
                    <img src={image6} alt='' className='col-start-2 col-span-1 max-h-[500px] max-w-[800px] w-[100%]'/>
                </div>
            </div>
        </section>
    )
}