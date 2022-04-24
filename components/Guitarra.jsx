import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
   const { id } = guitarra;
   const { descripcion, imagen, nombre, precio } = guitarra.attributes;

   return (
      <div className={styles.guitarra}>
         <Image layout="responsive" width={170} height={350} src={imagen} alt="" />
         <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>
               {"$"}
               {precio}
            </p>
            <Link href={`/guitarras/${id}`}>
               <a className={styles.enlace}>Ver producto</a>
            </Link>
         </div>
      </div>
   );
};

export default Guitarra;
