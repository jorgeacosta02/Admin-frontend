import styles from './_PresentationComp.module.scss';

const PresentationComp = () => {
  return (
    <div
        className={styles.container}    
    >
        {/* <h3>
            Bienvenidos
        </h3> */}
        <h4
            className={styles.gestion}
        >
            Gestión Profesional de Consorcios con un Toque Personal...
        </h4>
        <p
            className={styles.description}
        >
            Soy Jorge Acosta, administrador de consorcios comprometido en ofrecer un servicio cercano, eficiente y transparente. Entiendo que la administración de un consorcio requiere una atención meticulosa y un enfoque personalizado, y estoy aquí para asegurarme de que cada detalle sea manejado con profesionalismo y dedicación.
        </p>
        {/* <h4>
            ¿Por Qué Elegirme?
        </h4> */}
        <p
            className={styles.atencion}
        >
            Atención Personalizada: Al ser un profesional independiente, garantizo un trato directo y personalizado, entendiendo las necesidades específicas de cada consorcio y propietario.
            Transparencia y Confianza: Prometo una gestión transparente, donde la comunicación y la confianza son pilares fundamentales. Cada propietario tiene acceso completo a la información financiera y administrativa.
            Compromiso y Dedicación: Mi compromiso es ofrecer un servicio de calidad, respondiendo rápidamente a las necesidades y preocupaciones de los propietarios.
        </p>

{/* Servicios Ofrecidos

    Administración Financiera: Manejo de presupuestos, cobro de expensas, pago a proveedores y presentación de balances claros y detallados.
    Mantenimiento Integral: Coordinación y supervisión de trabajos de mantenimiento preventivo y correctivo, asegurando la óptima condición de las instalaciones.
    Comunicación Continua: Disponibilidad para atender consultas y necesidades de los propietarios, fomentando un ambiente de confianza y cooperación.

¡Conozcámonos!

Permítame mostrarle cómo una administración unipersonal puede transformar la gestión de su consorcio en una experiencia eficiente y sin complicaciones. Contácteme hoy mismo para una consulta gratuita y descubra la diferencia que puede hacer un servicio personalizado. */}
    </div>
  )
}

export default PresentationComp
