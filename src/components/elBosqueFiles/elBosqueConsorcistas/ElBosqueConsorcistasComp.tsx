import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueConsorcistasComp.module.scss';

const ElBosqueConsorcistasComp = () => {


    const consorcistas = [
        {
            lote: 1,
            info:[
                {
                    nombre: 'Hidalgo Javier',
                    telefono: '2644518852',
                    email: 'jahc15@hotmail.com',
                },
                {
                    nombre: 'Romero Silvana',
                    telefono: '2645650317',
                    email: '',
                },
            ]
        },
        {
            lote: 2,
            info:[
                {
                    nombre: 'Hidalgo Javier',
                    telefono: '2644518852',
                    email: 'jahc15@hotmail.com',
                },
                {
                    nombre: 'Romero Silvana',
                    telefono: '2645650317',
                    email: '',
                },
            ]
        },
        {
            lote: 3,
            info:[
                {
                    nombre: 'Terzi',
                    telefono: '',
                    email: '',
                },

            ]
        },
        {
            lote: 4,
            info:[
                {
                    nombre: 'Illanes',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 5,
            info:[
                {
                    nombre: 'Quijano Juan Antonio',
                    telefono: '2646703944',
                    email: '',
                },
                {
                    nombre: 'Vila Emilce',
                    telefono: '2644442390',
                    email: 'emilce_vila@hotmail.com',
                },
            ]
        },
        {
            lote: 6,
            info:[
                {
                    nombre: 'Bazanelli Mariela',
                    telefono: '2644605620',
                    email: 'bazanm494@gmail.com',
                },
            ]
        },
        {
            lote: 7,
            info:[
                {
                    nombre: 'Alvarez Tomás',
                    telefono: '2646615824',
                    email: '',
                },
            ]
        },
        {
            lote: 8,
            info:[
                {
                    nombre: 'Suárez Roberto',
                    telefono: '2644523984',
                    email: '',
                },
                {
                    nombre: 'Duman',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 9,
            info:[
                {
                    nombre: 'Mira Mariana',
                    telefono: '2644149513',
                    email: '',
                },
                {
                    nombre: 'García',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 10,
            info:[
                {
                    nombre: 'Echegaray Rodrigo',
                    telefono: '2644544550',
                    email: '',
                },
            ]
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
                        <li 
                            key={cons.lote} 
                            className={styles.li}
                        >
                            <h4 className={styles.title}>
                                Lote {cons.lote}:
                            </h4>


                        {cons.info?.map(user => {
                            return (
                                <div
                                    className={styles.liUser}
                                >
                                    <p className={styles.text}>
                                        Nombre: {user.nombre}
                                    </p>
                                    <p className={styles.text}>
                                        Teléfono: {user.telefono}
                                    </p>
                                    <p className={styles.text}>
                                        Email: {user.email}
                                    </p>
                                </div>
                            )
                        })}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ElBosqueConsorcistasComp
