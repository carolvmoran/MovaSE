import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {


    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownCountainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled
                    className={styles.countdownButton}>
                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        { isActive ?
                            (
                                <button type="button" onClick={resetCountdown}
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                    Abandonar Ciclo
                                </button>
                            ) :
                            (
                                <button type="button" onClick={startCountdown}
                                    className={styles.countdownButton}>
                                    Iniciar um Ciclo
                                </button>
                            )
                        }
                    </>
                )
            }
        </div>
    );
}