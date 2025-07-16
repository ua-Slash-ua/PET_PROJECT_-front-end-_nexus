import styles from './MenuItems.module.css'
import Link from "next/link";

type MenuItemsProps = {
    name: string;
    path: string;
}
export default function MenuItems({name,path}:MenuItemsProps){
    return(
        <>
            <Link
                className={styles.nav_link}
                href={path}
            >
                {name}
            </Link>
        </>
    )
}