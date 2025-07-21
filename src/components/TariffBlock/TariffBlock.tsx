import s from './TariffBlock.module.css'
import {TariffData} from "@/data/tariff.data";
import TariffItem from "@/components/TariffBlock/TariffItem/TariffItem";
export default function TariffBlock(){
    return (
        <>
            <section className={s.section_tariff} id="tickets">
                <header className={s.tariff_header}>
                    <span>
                        Ticket Options
                    </span>
                    <span>
                    </span>
                </header>
                <div className={s.tariff_content}>
                    {
                        TariffData.map((tariff, index) => (
                            <TariffItem
                                key={index}
                                name={tariff.name}
                                description={tariff.description}
                                price={tariff.price}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}