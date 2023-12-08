
export default function FormContact() {
    return (
        <div className="bg-black text-white w-full rounded-2xl pt-4 pb-0 max-[1200px]:text-[1.5em] max-[1200px]:pt-2">
            <h5 className="text-center text-[40px] max-[1200px]:text-[1.75em]">Deixe sua mensagem</h5>
            <form className="pl-[32px] pr-[32px] pt-[16px] pb-[26px] max-[1200px]:pl-[12px] max-[1200px]:pr-[12px]">
                <div className="w-full flex flex-col">
                    <label htmlFor="name" className="w-full text-left text-[30px] max-[1200px]:text-[1.35em]">Nome</label>
                    <input name="name" type="text" className="rounded-md h-16 text-black p-4"/>
                </div>
                <div className="w-full flex flex-col pb-[0.8em]">
                    <label htmlFor="mail" className="w-full text-left text-[30px] max-[1200px]:text-[1.35em]">E-mail</label>
                    <input name="mail" type="mail" className="rounded-md h-16 text-black p-4"/>
                </div>
                <div className="w-full flex flex-col pb-[0.8em]">
                    <label htmlFor="tel" className="w-full text-left text-[30px] max-[1200px]:text-[1.35em]">Telefone/Whatsapp</label>
                    <input name="tel" type="tel" className="rounded-md h-16 text-black p-4"/>
                </div>
                <div className="w-full flex flex-col pb-[0.8em]">
                    <label htmlFor="message" className="w-full text-left text-[30px] max-[1200px]:text-[1.35em]">Mensagem</label>
                    <textarea name="message" rows={4} className="rounded-md h-[213px] text-black p-4"></textarea>
                </div>
                <div className="w-full flex flex-col pb-[0.2em] pt-6">
                    <button className="rounded-md bg-yellow text-white text-[35px] max-[1200px]:text-[1.35em]">Enviar Mensagem</button>
                </div>
            </form>
        </div>
    )
}