import FormContact from "./form";

export default function Contact() {
    return (
        <div className="bg-yellow w-full mt-[40px] pt-8 pb-8" id="contact">
            <section className='grid grid-cols-2 gap-2 max-[1200px]:flex max-[1200px]:flex-col-reverse'>
                <div className="col-span-1">
                    <FormContact/>
                </div>
                <div className="col-span-1 text-left ml-8 max-lg:mt-0 max-[1200px]:mb-6">
                    <h2 className='font-extrabold text-4xl mb-4'>Contato</h2>
                    <p className="text-white text-[2em]">contato@mastergym.com.br</p>
                    <p className="text-white text-[1.24em]">intagram/gym</p>
                    <p className="text-white text-[1.24em]">facebook.com.br/gym</p>
                    <p className="text-white text-[1.24em]">(16) 994654-65456</p>
                    <p className="text-white text-[1.24em]">(16) 32654-65456</p>
                    <h2 className='font-extrabold text-4xl mb-4 mt-8'>Horário de atendimento</h2>
                    <p className="text-white text-[1.24em]">Segunda-feira à Sexta-feira: 07:00hrs às 22:00hrs</p>
                    <p className="text-white text-[1.24em] mt-2">Sabádos: 09:00hrs às 16:00hrs</p>
                </div>
            </section>
        </div>
    )
}