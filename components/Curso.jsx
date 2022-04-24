import React from "react";
import styles from "../styles/Curso.module.css";

const Curso = () => {
   return (
      <section className={styles.curso}>
         <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
               <h2 className="heading">Aprende a tocar guitarra</h2>
               <p className={styles.texto}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi eos dolorem,
                  commodi quis quos aspernatur. Impedit ad nobis illum culpa?
               </p>
               <a className={styles.enlace}>Más información</a>
            </div>
         </div>
      </section>
   );
};

export default Curso;
