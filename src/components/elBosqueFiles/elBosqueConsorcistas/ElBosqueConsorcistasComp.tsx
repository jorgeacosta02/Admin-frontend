import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueConsorcistasComp.module.scss';

const ElBosqueConsorcistasComp = () => {
  return (
    <div 
        className={styles.mainContainer}
    >
        <BackButtonComp/>
        <h3 className={styles.mainTitle}>
            Consorcistas
        </h3>
        <div className={styles.infoContainer}>
            <ul>
                <li>
                    <h4 className={styles.title}>
                        Lote 1-2:
                    </h4>
                    <p className={styles.text}>
                    ROMERO Silvana/HIDALGO Javier

                    </p>
                    <p className={styles.text}>
                    +54 9 2645 65-0317/+54 9 2644 51-8852

                    </p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default ElBosqueConsorcistasComp
