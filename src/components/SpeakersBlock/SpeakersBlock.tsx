import styles from './SpeakersBlock.module.css'
import {SpeakersData} from "@/data/speakers.data";
import Image from "next/image";
import BtnAddMore from "@/components/layouts/Buttons/BtnAddMore/BtnAddMore";

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
            <div className={styles.speakers_container}>

                {SpeakersData.map((speaker, index) => (
                    index <= 1 ? (
                        <div className={styles.speaker_item} key={speaker.id}>
                            <div className={styles.speaker_data}>
                                <span>{speaker.name}</span>
                                <span style={{whiteSpace: 'pre-line'}}>{speaker.position}</span>
                            </div>
                            <div className={styles.speaker_photo}>
                                <Image
                                    className={styles.greyImage}
                                    src={speaker.photo}
                                    alt={speaker.name}
                                    width={295}
                                    height={452}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.speaker_item} key={speaker.id}>
                            <div className={styles.speaker_photo}>
                                <Image
                                    className={styles.greyImage}
                                    src={speaker.photo}
                                    alt={speaker.name}
                                    width={295}
                                    height={452}
                                />
                            </div>
                            <div className={styles.speaker_data}>
                                <span>{speaker.name}</span>
                                <span style={{whiteSpace: 'pre-line'}}>{speaker.position}</span>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div className={styles.speakers_btn}><BtnAddMore/></div>

        </section>
    </>)
}