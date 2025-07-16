import styles from './Header.module.css'
import MenuComponent from "@/components/Header/Menu/MenuComponent";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_logo}>
                    nexus
                </div>
                <MenuComponent/>
            </header>
        </>
    )
}