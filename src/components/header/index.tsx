import logoGym from '../../assets/images/icons/logo.png';
import IconsHeader from './iconsHeader';
import MenuHeader from './menuHeader';

export default function Header() {
    return (
    <header className='body-font font-kanit'>
        <IconsHeader/>
        <nav className="absolute top-[43px] left-0 right-0 p-2 bg-yellow max-h-[92px] h-[6em] z-[2]">
            <div className="flex flex-wrap items-center justify-between px-2">
                <div className="flex items-center flex-shrink-0 text-white mt-[-0.2em]">
                    <img src={logoGym} alt="Logo Master Gym Academia"/>
                    <h1 className='text-[45px] font-bold p-2 inline-block align-middle max-[1200px]:text-[1.95em]'>Master Gym</h1>
                </div>
                <MenuHeader/>
            </div>
        </nav>
    </header>
    );
}