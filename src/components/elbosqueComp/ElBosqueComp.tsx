import styles from './_ElBosqueComp.module.scss';
import resumen from '../../assets/images/Expensas/ExpensasElBosque.jpg'

const ElBosqueComp = () => {
  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.mainTitle}>
        Complejo Residencial El Bosque
      </h4>
      <div className={styles.infoContainer}>
        <div className={styles.expensasContainer}>
          <h6 className={styles.title}>
            Estado de deuda de expensas
          </h6>
          <img 
            src={resumen} 
            alt="resume"
            className={styles.resumen}
          />
        </div>
      </div>
    </div>
  )
}

export default ElBosqueComp
