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

    </div>
  )
}

export default ElBosqueGenInfoComp
