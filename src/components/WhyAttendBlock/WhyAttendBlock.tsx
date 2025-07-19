import styles from './WhyAttendBlock.module.css'
import {whyAttendsData} from "@/data/why_attends.data";

export default function WhyAttendBlock() {
    return (
        <>
            <section className={styles.section_why_attend}>
                <header className={styles.why_attend_header}>
                    <span>
                        WHY ATTEND?
                    </span>
                    <span>
                        Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.
                    </span>
                </header>
                <div className={styles.why_attend_content}>
                    {
                        whyAttendsData.map((whyAttend, index) => (
                            index <= 1?

                            (<div key={index} className={styles.why_attend_item}>
                                <span className={styles.number}>{whyAttend.id}</span>
                                <span className={styles.title}>{whyAttend.title}</span>
                                <div>
                                    <span >{whyAttend.description}</span>
                                </div>


                            </div>):(
                                    <div key={index} className={`${styles.why_attend_item} ${styles.reverse}`}>
                                        <span className={styles.number}>{whyAttend.id}</span>
                                        <span className={styles.title}>{whyAttend.title}</span>
                                        <div>
                                            <span >{whyAttend.description}</span>
                                        </div>


                                    </div>
                                )
                        ))
                    }
                </div>
            </section>
        </>
    )
}
