import styles from './_ElBosqueComp.module.scss';
import resumen from '../../../assets/images/Expensas/ExpensasElBosque.jpg'
import { NavLink } from 'react-router-dom';

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
        <div className={styles.linksContainer}>
          <NavLink
            to='/elbosquereglam'
            className={styles.link}
          >
            Reglamento
          </NavLink>
          <a
            className={styles.dwlResumeContainer}
            href="https://github.com/jorgeacosta02/Admin-frontend/raw/main/src/assets/ElBosqueFiles/PlanillaElBosque.xlsx" download="PlanillaElBosque.xlsx" target="_blank">
            <h6
            className={styles.dwlResume}
            >
              Descargar Planilla
            </h6>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ElBosqueComp
