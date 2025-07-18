import styles from './DescriptionBlock.module.css'
import Image from "next/image";
import BtnAddMore from "@/components/layouts/Buttons/BtnAddMore/BtnAddMore";
export default function DescriptionBlock() {
    return (
        <>
            <section className={styles.section_descriptions}>
                <div className={styles.descriptions}>
                    <span className={styles.title}>Speakers</span>
                    <div className={styles.description_block}>
                        <div className={styles.description_block}>
                            <svg width="74" height="74" viewBox="0 0 74 74" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="37" fill="#D9D9D9"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M32.6256 27.5208C32.6256 26.6809 33.3247 26 34.1872 26H47.4383C48.3008 26 49 26.6809 49 27.5208V40.4253C49 41.2652 48.3008 41.9461 47.4383 41.9461C46.5759 41.9461 45.8767 41.2652 45.8767 40.4253V31.1924L28.6659 47.953C28.0561 48.5469 27.0673 48.5469 26.4574 47.953C25.8475 47.359 25.8475 46.3961 26.4574 45.8022L43.6682 29.0416H34.1872C33.3247 29.0416 32.6256 28.3607 32.6256 27.5208Z"
                                      fill="#0147FF"/>
                            </svg>
                        </div>


                        <p className={styles.description}>Hear from global AI leaders, researchers, and entrepreneurs
                            who
                            are defining the future of artificial intelligence.</p>
                    </div>
                    <div className={styles.btn_block}>
                        <div className={styles.btn_img}>
                            <ul>
                                <li>
                                    <Image
                                        src="/desc-block/Image (24).png"
                                        alt="photo-1"
                                        width={74}
                                        height={74}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/desc-block/Image (23).png"
                                        alt="photo-2"
                                        width={74}
                                        height={74}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/desc-block/Image (22).png"
                                        alt="photo-3"
                                        width={74}
                                        height={74}
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/desc-block/Image (25).png"
                                        alt="photo-4"
                                        width={74}
                                        height={74}
                                    />
                                </li>
                            </ul>

                        </div>
                        <BtnAddMore/>
                    </div>
                </div>
                <div className={styles.descriptions_aside}>
                    <div className={styles.technologies}>
                        <span className={styles.title}>Technologies</span>
                        <p className={styles.description}>Explore advanced machine learning, natural language
                            processing, AI-driven automation, and emerging cybersecurity applications.</p>
                    </div>
                    <div className={styles.networking}>
                        <span className={styles.title}>Networking Opportunities</span>
                        <p className={styles.description}>Enjoy exclusive networking sessions, roundtables, and social
                            events to foster collaboration and spark new partnerships.</p>
                    </div>
                </div>

            </section>
        </>
    )
}