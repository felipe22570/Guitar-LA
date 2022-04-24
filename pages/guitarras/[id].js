import Image from "next/image";
import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ data, agregarCarrito }) => {
   const { id } = data;
   const { descripcion, imagen, nombre, precio } = data.attributes;

   const [cantidad, setCantidad] = useState(1);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (cantidad < 1) {
         alert("Cantidad no válida");
         return;
      }

      const guitarraSeleccionada = {
         id,
         imagen,
         nombre,
         precio,
         cantidad,
      };

      agregarCarrito(guitarraSeleccionada);
   };

   return (
      <Layout>
         <div className={styles.guitarra}>
            <Image layout="responsive" width={170} height={350} src={imagen} alt="" />
            <div className={styles.contenido}>
               <h3>{nombre}</h3>
               <p className={styles.descripcion}>{descripcion}</p>
               <p className={styles.precio}>
                  {"$"}
                  {precio}
               </p>
               <form className={styles.formulario} onSubmit={handleSubmit}>
                  <label>Cantidad: </label>
                  <select value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))}>
                     <option value="0">Seleccione</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>

                  <input type="submit" value="Agregar al carrito" />
               </form>
            </div>
         </div>
      </Layout>
   );
};

export async function getServerSideProps({ query: { id } }) {
   const urlGuitarra = `${process.env.API_URL}/guitarras/${id}`;

   const resp = await fetch(urlGuitarra);
   const data = await resp.json();

   return {
      props: {
         data,
      },
   };
}

export default Producto;
