import styles from './_HomeComp.module.scss'
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import SliderComp from '../sliderComp/SliderComp';


const HomeComp = () => {
  
  const moonState = useSelector(selectMoonState);
  
  const dataColor = `${styles.data} ${moonState.moon ? styles.dataWhite : ''}`;

  // const langState = useSelector(selectLangState).lang;

  return (
    <div className={styles.mainContainer}>
      <SliderComp/>
      <div className={styles.dataContainer}>
        <div className={dataColor}>
          <h5
            className={styles.role}
          >
            Servicio de administración de consorcios eficiente y transparente, entendiendo que la administración de un consorcio requiere una atención meticulosa y un enfoque personalizado.
          </h5>
          {/* <p
            className={styles.text}
          >
          </p> */}
        </div>
      </div>
      {/* <div className={styles.clientsContainer}>
        <h3 className={styles.title}>
            Clientes
        </h3>
      </div> */}
    </div>
  );
}

export default HomeComp;