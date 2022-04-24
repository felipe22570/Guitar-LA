import React from "react";
import Guitarra from "./Guitarra";
import styles from "../styles/Listado.module.css";

const Listado = ({ guitarras }) => {
   return (
      <div className={styles.listado}>
         {guitarras.map((g) => (
            <Guitarra key={g.id} guitarra={g} />
         ))}
      </div>
   );
};

export default Listado;
