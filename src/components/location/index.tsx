import Map from "./map";

export default function Location() {
    return (
        <section className="text-left mt-[40px]">
            <h2 className='font-extrabold text-4xl mb-4'>Localização</h2>
            <p>Rua 1 bairro Centro, Orlândia-SP</p>
            <p>1456645-54654</p>
            <Map/>
        </section>
    )
}