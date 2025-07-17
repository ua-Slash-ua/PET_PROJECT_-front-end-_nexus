import styles from './SpeakersBlock.module.css'

export default function SpeakersBlock() {
    return (
        <>
            <section id="speakers" className={styles.section_speakers}>
                <div className={styles.speakers}>
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

                                </li>
                            </ul>
                        </div>
                        <button className={styles.btn_add_more}>
                            <span>And more</span>
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.89715 1.65427C4.89715 1.01678 5.41394 0.5 6.05142 0.5H15.8457C16.4832 0.5 17 1.01678 17 1.65427V11.4486C17 12.0861 16.4832 12.6028 15.8457 12.6028C15.2082 12.6028 14.6915 12.0861 14.6915 11.4486V4.44092L1.97046 17.1619C1.51969 17.6127 0.788848 17.6127 0.338078 17.1619C-0.112693 16.7112 -0.112693 15.9803 0.338078 15.5295L13.0591 2.80854H6.05142C5.41394 2.80854 4.89715 2.29176 4.89715 1.65427Z" fill="white"/>
                            </svg>

                        </button>
                    </div>
                </div>
                <div className={styles.speakers_aside}>
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