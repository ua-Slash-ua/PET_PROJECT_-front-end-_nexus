import styles from './SpeakersBlock.module.css'

export default function SpeakersBlock() {
    return (<>

        <section className={styles.section_speakers} id="speakers">
            <header className={styles.speakers_header}>
                    <span>
                        KEYNOTE <br/>
                        SPEAKERS
                    </span>
                    <span>
                        Meet the industry leaders <br/>
                        shaping the future of AI.
                    </span>
            </header>
        </section>
    </>)
}