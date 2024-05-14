import styles from './_NavBarLogoComp.module.scss';
// import TriarLogo from '../../assets/Images/Logos&Brands/logo fondo transparente.png'

const LogoComp = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.brand}>
        Gestión Residencial Integral
        {/* Gestión Inmuebles */}
      </h4>
    </div>
  )
}

export default LogoComp
