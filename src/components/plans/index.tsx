const listPlans = [
    {
        value: 39.90,
        itens: [
            "Funcional"
        ] 
    },
    {
        value: 69.90,
        itens: [
            "Musculação"
        ] 
    },
    {
        value: 79.90,
        itens: [
            "Spinning"
        ] 
    },
    {
        value: 99.90,
        itens: [
            "Dança"
        ] 
    },
    {
        value: 129.90,
        itens: [
            "Natação"
        ] 
    },
    {
        value: 139.90,
        itens: [
            "Musculação",
            "Boxe | Muay Thai"
        ] 
    },
    {
        value: 139.90,
        itens: [
            "Musculação",
            "Dança"
        ] 
    }
];

export default function Plans() {
    const subItems = (itens: string[]) => {
        return itens.map((item, itemIndex) => (
            <span key={itemIndex} className="text-gray-100 text-[35px] mr-4 max-[960px]:text-[18px]">{item}</span>          
        ));
    }
    return (
        <section className='text-left relative section-plans'>
            <h2 className='font-extrabold text-4xl mb-4'>Planos</h2>
            <ul>
                {listPlans.map((plan, index) => (
                    <li key={index} className="bg-black text-white rounded-md list-none plan-item">
                        <div className="grid grid-cols-5 mt-8 pl-2 pr-2 max-[1200px]:flex flex-col text-center">
                            <h4 className="col-span-2 font-bold text-[80px] max-[960px]:text-[56px]">R$ {plan.value.toFixed(2)}</h4>
                            <div className="col-span-3 pt-8 pl-8 max-[960px]:p-0">
                                {subItems(plan.itens)}
                            </div>
                        </div>
                    </li>
                ))} 
            </ul>
        </section>
    )
}