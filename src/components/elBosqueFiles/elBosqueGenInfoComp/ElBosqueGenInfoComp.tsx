import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueGenInfoComp.module.scss';

const ElBosqueGenInfoComp = () => {
  return (
    <div 
        className={styles.mainContainer}
    >
        <BackButtonComp/>
        <h3 className={styles.mainTitle}>
            Información general El Bosque
        </h3>
        <div className={styles.infoContainer}>
        <div className={styles.categoryContainer}>
                <h4 className={styles.title}>
                    Teléfono de garita
                </h4>
                <ul>
                    <li>
                        <p className={styles.text}>
                            <span className={styles.textBold}>2645 46-7611</span> 
                        </p>
                    </li>
                </ul>
                </div>
            <div className={styles.categoryContainer}>
                <h4 className={styles.title}>
                    Seguridad
                </h4>
                <h5 className={styles.title2}>
                    Personal afectado
                </h5>
                <ul>
                    <li>
                        <p className={styles.text}>
                            <span className={styles.textBold}>Jorge Daniel Vargas</span> Teléfono Particular 264111111
                        </p>
                    </li>
                    <li>
                        <p className={styles.text}>
                            <span className={styles.textBold}>Lucas</span> Teléfono Particular 264111111
                        </p>
                    </li>
                    <li>
                        <p className={styles.text}>
                            <span className={styles.textBold}>Carlos Gaillez</span> Teléfono Particular 264111111
                        </p>
                    </li>
                </ul>
                <h5 className={styles.title2}>
                    Cámaras de seguridad
                </h5>
            </div>
            <div className={styles.categoryContainer}>
                <h4 className={styles.title}>
                    Mantenimento
                </h4>
              
                <h5 className={styles.title2}>
                    Personal afectado
                </h5>
                <ul>
                    <li>
                        <p className={styles.text}>
                            <span className={styles.textBold}>Javier Quevedo</span> Teléfono Particular 2644 62-5413
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default ElBosqueGenInfoComp
