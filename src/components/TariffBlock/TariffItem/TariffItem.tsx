import s from './TariffItem.module.css'
import BtnHero from "@/components/layouts/Buttons/BtnHero/BtnHero";

type tariffItemProps = {
    name: string;
    description: string;
    price: string;
}
export default function TariffItem({name, description, price}: tariffItemProps) {
    return (
        <>
            <div className={s.tariff_item}>
                <h3>
                    {name}
                </h3>
                <p>
                    {description}
                </p>
                <span className={s.price}>
                    {price}
                </span>
                <BtnHero text={'Get your ticket'} width={280}/>
            </div>
        </>
    )
}