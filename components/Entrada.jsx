import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers/helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
   const { id } = entrada;
   const { titulo, contenido, resumen, imagen, publishedAt } = entrada.attributes;

   return (
      <article>
         <Image layout="responsive" src={imagen} alt="" width={800} height={600} />
         <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>
               <a className={styles.enlace}> Leer entrada</a>
            </Link>
         </div>
      </article>
   );
};

export default Entrada;
