import styles from './ScheduleBlock.module.css'

export default function ScheduleBlock() {
    return (
        <>
            <section className={styles.schedule_section} id={'schedule'}>
                <header className={styles.schedule_header}>
                    <span>
                        AGENDA
                    </span>
                    <span>
                        October 15-17, 2052 | Horizon <br/> Convention Center, Amsterdam
                    </span>
                </header>
                <div className={styles.schedule_container}>
                    <ul>
                        <li>
                            <div className={styles.schedule_item}>
                                <div className={styles.schedule_date_time}>
                                    <span className={styles.schedule_date}>Day 1</span>
                                    <span className={styles.schedule_time}>09:00 – 19:00</span>
                                </div>
                                <div className={styles.schedule_description_block}>
                                    <span className={styles.schedule_title}>AI Innovations & Trends</span>
                                    <span className={styles.schedule_description}>The summit kicks off with a keynote, expert panels, and discussions on AI’s impact, ethics, and automation. Hands-on workshops and a networking event wrap up the day.</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.schedule_item}>
                                <div className={styles.schedule_date_time}>
                                    <span className={styles.schedule_date}>Day 2</span>
                                    <span className={styles.schedule_time}>09:00 – 20:00</span>
                                </div>
                                <div className={styles.schedule_description_block}>
                                    <span className={styles.schedule_title}>AI Technologies & Applications</span>
                                    <span className={styles.schedule_description}>Explore the latest in generative AI, robotics, and NLP, with industry-led discussions and tech demos. A startup showcase and investor insights highlight AI’s business potential.</span>

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.schedule_item}>
                                <div className={styles.schedule_date_time}>
                                    <span className={styles.schedule_date}>Day 3</span>
                                    <span className={styles.schedule_time}>09:30 – 16:00</span>
                                </div>
                                <div className={styles.schedule_description_block}>
                                    <span className={styles.schedule_title}>Future of AI & Networking</span>
                                    <span className={styles.schedule_description}>Dive into AI’s long-term impact, attend expert-led workshops, and watch the startup pitch competition. The event closes with a visionary keynote and final networking sessions.</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <footer className={styles.schedule_footer}>
                    </footer>
                    <div className={styles.schedule_icon}>
                        <svg width="370" height="266" viewBox="0 0 370 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M211.85 117.955L211.857 117.788L211.986 117.849L211.85 117.955ZM349.978 110.891L347.163 105.461C336.212 84.3226 321.443 65.3942 303.602 49.6313L300.345 46.7569L211.981 117.859C227.896 125.492 245.162 129.905 262.788 130.846C280.414 131.787 298.052 129.236 314.69 123.341L349.978 110.891ZM211.852 117.798L211.763 4.37712L207.483 3.6451C184.015 -0.355357 160.008 0.0214748 136.68 4.76025L130.685 5.97531L143.138 41.2552C148.989 57.9074 158.071 73.2423 169.863 86.3759C181.656 99.5095 195.927 110.185 211.857 117.788L211.852 117.798ZM259.114 369.983L264.534 367.164C285.678 356.22 304.611 341.452 320.373 323.608L323.248 320.351L252.083 232.113C244.48 248.016 240.087 265.262 239.158 282.864C238.228 300.467 240.779 318.08 246.664 334.695L259.114 369.983ZM365.626 231.769L366.357 227.488C370.36 204.017 369.978 180.009 365.232 156.679L364.026 150.688L328.738 163.138C312.11 168.979 296.797 178.044 283.676 189.811C270.555 201.58 259.883 215.82 252.273 231.717L365.626 231.769ZM252.083 232.113L252.273 231.717L251.776 231.71L252.083 232.113ZM103.343 55.3021L90.893 20.0138L85.4627 22.8295C64.3251 33.7783 45.3965 48.549 29.634 66.3899L26.7604 69.646L97.8341 158.072C105.477 142.148 109.899 124.872 110.842 107.235C111.785 89.5958 109.235 71.9469 103.334 55.2981L103.343 55.3021ZM-16.3504 162.51C-20.3505 185.978 -19.9727 209.984 -15.2345 233.315L-14.0191 239.309L21.2603 226.855C37.9246 221 53.2695 211.91 66.4105 200.106C79.5532 188.302 90.2311 174.017 97.8341 158.072L-15.6177 158.228L-16.3504 162.51ZM138.012 272.143L138.141 272.205L138.133 272.042L138.012 272.143ZM0.0152583 279.111L2.83551 284.532C13.7794 305.676 28.5465 324.608 46.3914 340.371L49.6471 343.246L138.012 272.143C122.093 264.514 104.826 260.104 87.2001 259.165C69.5738 258.226 51.9355 260.777 35.2983 266.671L0.0152583 279.111ZM138.141 272.205L138.228 385.625L142.511 386.357C165.98 390.36 189.988 389.979 213.319 385.233L219.309 384.027L206.859 348.738C201.006 332.086 191.923 316.754 180.13 303.62C168.338 290.487 154.069 279.811 138.141 272.205ZM138.123 272.037L138.284 271.932C172.097 248.986 211.244 235.124 251.962 231.678L251.851 231.527C228.902 197.714 215.039 158.566 211.597 117.847L211.451 117.948C177.641 140.901 138.492 154.763 97.7724 158.201L97.8686 158.357C120.822 192.164 134.686 231.311 138.128 272.028L138.123 272.037Z" fill="url(#paint0_linear_2001_136)"/>
                            <defs>
                                <linearGradient id="paint0_linear_2001_136" x1="-7.00529" y1="259.211" x2="418.103" y2="148.025" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0147FF"/>
                                    <stop offset="1" stopColor="#0147FF" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                </div>


            </section>
        </>
    )
}