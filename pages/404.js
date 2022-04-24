import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
   return (
      <div className={styles.no_encontrado}>
         <h1 className="heading">Página no encontrada</h1>

         <Link href={"/"}>Volver a inicio</Link>
      </div>
   );
};

export default NoEncontrado;
