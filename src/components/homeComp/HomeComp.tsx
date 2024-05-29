import styles from './_HomeComp.module.scss';
import { useState, useEffect } from 'react';

// slider imágenes
import img01 from '../../assets/Images/Slider/01.jpg';
import img02 from '../../assets/Images/Slider/11.jpg';
import img03 from '../../assets/Images/Slider/02.jpg';
import img04 from '../../assets/Images/Slider/12.jpg';
import img05 from '../../assets/Images/Slider/03.jpg';
import img06 from '../../assets/Images/Slider/13.jpg';
import img07 from '../../assets/Images/Slider/04.jpg';
import img08 from '../../assets/Images/Slider/14.jpg';
import img09 from '../../assets/Images/Slider/05.jpg';
import img10 from '../../assets/Images/Slider/15.jpg';
import img11 from '../../assets/Images/Slider/06.jpg';
import img12 from '../../assets/Images/Slider/16.jpg';
import img13 from '../../assets/Images/Slider/17.jpg';
import img14 from '../../assets/Images/Slider/18.jpg';
import img15 from '../../assets/Images/Slider/19.jpg';
import img16 from '../../assets/Images/Slider/20.jpg';
import img17 from '../../assets/Images/Slider/21.jpg';
import img18 from '../../assets/Images/Slider/22.jpg';

// Componentes
import PresentationComp from './presentationComp/PresentationComp';



const HomeComp = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 18);
    }, 10000); // Cambia a la siguiente imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  console.log(currentSlide)

  // Define un arreglo con las imágenes
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18
  ];

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            key={index}
          >
            <img
              src={image}
              alt=""
              className={styles.img}
              />
          </div>
        ))}
      </div>
      {/* <div className={styles.container}>
        <img src={img01} alt="" />
      </div> */}
      <div className={styles.div}>
        <PresentationComp/>
        <h1>Especialidades</h1>
        <h1>Profesionales</h1>
        <h1>Ubicación</h1>
      </div>
    </div>
  );
}

export default HomeComp;
