import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueConsorcistasComp.module.scss';

const ElBosqueConsorcistasComp = () => {


    const consorcistas = [
        {
            lote: 1,
            nombre: 'Javier Hidalgo',
            telefono: '2644518852'
        },
        {
            lote: 2,
            nombre: 'Javier Hidalgo',
            telefono: '2644518852'
        },
        {
            lote: 3,
            nombre: 'Terzi',
            telefono: ''
        },
        {
            lote: 4,
            nombre: 'Illanes',
            telefono: ''
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 6,
            nombre: 'Mariela Bazanelli',
            telefono: '2644605620'
        },
        {
            lote: 7,
            nombre: 'Tomás Alvarez',
            telefono: '2646615824'
        },
        {
            lote: 8,
            nombre: 'Roberto Suarez',
            telefono: '2644523984'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
        {
            lote: 5,
            nombre: 'Juan Antonio Quijano',
            telefono: '2646703944'
        },
    ]

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
                {consorcistas.map(cons => {
                    return (
                        <li className={styles.li}>
                            <h4 className={styles.title}>
                                Lote: {cons.lote}:
                            </h4>
                            <p className={styles.text}>
                                {cons.nombre}
                            </p>
                            <p className={styles.text}>
                                {cons.telefono}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ElBosqueConsorcistasComp
