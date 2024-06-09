import styles from './_HomeComp.module.scss'
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
// import { selectLangState } from '../../redux/slices/langSlice';
import SliderComp from '../sliderComp/SliderComp';
import LinksComp from '../linksComp/LinksComp';


const HomeComp = () => {
  
  const moonState = useSelector(selectMoonState);
  
  const dataColor = `${styles.data} ${moonState.moon ? styles.dataWhite : ''}`;

  // const langState = useSelector(selectLangState).lang;

  return (
    <div className={styles.container}>
      <SliderComp/>
        <div className={styles.dataContainer}>
          <div className={dataColor}>
            <h4 className={styles.hi}>
            {/* {langState === 'es' ? "Hola Soy" : "Hi I'm"} */}
            </h4>
            <h2
              className={styles.name}
            >
              Jorge
            </h2>
            <h5
              className={styles.role}
            >
              Soy Jorge, administrador de consorcios con compromiso por ofrecer un servicio cercano, eficiente y transparente. Entiendo que la administración de un consorcio requiere una atención meticulosa y un enfoque personalizado, y estoy aquí para asegurarme de que cada detalle sea manejado con profesionalismo y dedicación.
            </h5>
            <p
              className={styles.text}
            >
            </p>
          <LinksComp/>
          </div>
      </div>
    </div>
  );
}

export default HomeComp;