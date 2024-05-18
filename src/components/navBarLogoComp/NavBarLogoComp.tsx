import styles from './_NavBarLogoComp.module.scss';
// import TriarLogo from '../../assets/Images/Logos&Brands/logo fondo transparente.png'

const LogoComp = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>
        Jorge Acosta de León
      </h4>
      {/* <h4 className={styles.name}>
        Gestión Residencial */}
        {/* Integral */}
      {/* </h4> */}
      <p className={styles.brand}>
        Administración Residencial
      </p>
      {/* <h5 className={styles.brand}>
        Jorge Acosta de León
      </h5> */}
    </div>
  )
}

export default LogoComp
