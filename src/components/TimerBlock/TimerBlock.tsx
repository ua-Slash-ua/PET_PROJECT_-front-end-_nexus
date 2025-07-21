'use client'
import styles from './TimerBlock.module.css'
import {useState, useEffect} from "react";
function formatTime(ms: number): string {
    const totalSec = Math.floor(ms / 1000);
    let days = Math.floor(totalSec / (3600 * 24));
    const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(days)}:${pad(hours)}:${pad(minutes)}`;
}
export default function TimerBlock() {
    const [timeDiff, setTimeDiff] = useState<string>('');
    const [targetDate] = useState(() => {
        const now = new Date();
        const day = Math.floor(Math.random() * (30 - 2 + 1)) + 2;
        const hours = Math.floor(Math.random() * (23 - 3 + 1)) + 3;
        const minutes = Math.floor(Math.random() * (59 - 3 + 1)) + 3;
        now.setDate(now.getDate() + day);
        now.setHours(now.getHours() + hours);
        now.setMinutes(now.getMinutes() + minutes);
        return now;
    });

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime(); // в мілісекундах
            setTimeDiff(formatTime(Math.max(diff, 0)));
        };

        update(); // одразу обчислити

        const intervalId = setInterval(update, 30_000); // оновлення кожні 30 сек

        return () => clearInterval(intervalId);
    }, [targetDate]);
    return (<>

        <section className={styles.section_timer} id="timer">
            <header className={styles.timer_header}>
                    <span>
                        REGISTER
                        NOW
                    </span>
                <span>
                        Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI innovation.
                    </span>
            </header>
            <div className={styles.timer_container}>
                <div className={styles.timer_con}>
                    <div className={styles.timer_title}>
                        Early Bird Pricing Ends In:
                    </div>
                    <div className={styles.timer_time}>
                        {timeDiff}
                    </div>
                    <div className={styles.timer_description}>
                        <span>DAYS</span>
                        <span>HOURS</span>
                        <span>MINUTES</span>
                    </div>
                    <div className={styles.timer_icon}>
                        <svg width="405" height="405" viewBox="0 0 405 405" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M396.913 145.197L386.787 118.191L267.213 163.023L361.286 76.6622L341.782 55.4157L245.271 144.013L299.492 24.7491L273.236 12.8128L221.268 127.122L227.947 1.73177L199.146 0.197824L192.08 132.876L145.435 8.46651L118.429 18.5918L165.073 143.001L72.522 47.6723L51.8284 67.7629L139.297 157.855L24.9873 105.888L13.0518 132.143L132.315 186.364L1.34556 183.054L0.617895 211.886L128.279 215.112L8.70481 259.944L18.8301 286.95L138.404 242.119L44.3315 328.479L63.8347 349.725L160.347 261.128L106.127 380.392L132.381 392.328L184.349 278.018L177.671 403.409L206.472 404.942L213.538 272.266L260.182 396.674L287.188 386.549L240.544 262.139L333.095 357.468L353.789 337.378L266.321 247.285L380.63 299.253L392.567 272.998L273.303 218.778L404.271 222.087L405 193.255L277.338 190.029L396.913 145.197Z"
                                  fill="url(#paint0_linear_56_200)"/>
                            <defs>
                                <linearGradient id="paint0_linear_56_200" x1="391.85" y1="131.694" x2="-70.4856"
                                                y2="271.586" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0147FF"/>
                                    <stop offset="1" stopColor="#0147FF" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>

            </div>

        </section>
    </>)

}