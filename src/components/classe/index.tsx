import imageClasse1 from '../../assets/images/icons/Rectangle 9.png';
import imageClasse2 from '../../assets/images/icons/Rectangle 25.png';
import imageClasse3 from '../../assets/images/icons/Rectangle 26.png';
import imageClasse4 from '../../assets/images/icons/Rectangle 10.png';
import imageClasse5 from '../../assets/images/icons/Rectangle 11.png';
import imageClasse6 from '../../assets/images/icons/Rectangle 27.png';

export default function Classe() {
    return (
        <section className='text-left'>
            <h2 className='font-extrabold text-4xl mb-4'>Aulas</h2>
            <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
                <div className="col-span-1">
                    <img src={imageClasse1} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
                <div className="col-span-1">
                    <img src={imageClasse2} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
                <div className="col-span-1">
                    <img src={imageClasse3} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
                <div className="col-span-1">
                    <img src={imageClasse4} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
                <div className="col-span-1">
                    <img src={imageClasse5} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
                <div className="col-span-1">
                    <img src={imageClasse6} alt='' className='p-4'/>
                    <p>The standard Lorem Ipsum passage, used since the 1500S</p>
                </div>
            </div>
        </section>
    )
}