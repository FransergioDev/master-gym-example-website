import imageIlustracaoGym from '../../assets/images/ilustracoes/ilustracao_about.png';

export default function About() {
    const textAbout = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <>
            <section className="grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col">
                <div className='text-left mt-[99px] max-[1200px]:mt-[50px]'>
                    <h2 className='font-extrabold text-4xl'>Sobre</h2>
                    <p className='pt-[40px]'>
                        {textAbout}
                    </p>
                </div>
                <div className='flex grow about-illustration'>
                    <img src={imageIlustracaoGym} alt=''/>
                </div>
            </section>
            <div className='banner-illustration-image'></div>
        </>
    )
}