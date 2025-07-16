import styles from './Menu.module.css'
import {Menu} from "@/config/menu.config";
import MenuItems from "@/components/Header/Menu/MenuItems/MenuItems";

export default function MenuComponent() {
    return (
        <>
            <div className={styles.menus}>
                {
                    Object.entries(Menu).map(([key, value]) => (
                        <MenuItems key={key} name={value.title} path={value.path}/>
                    ))

                }

            </div>
        </>
    )
}
