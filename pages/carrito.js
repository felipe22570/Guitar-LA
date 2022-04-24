import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
   const [total, setTotal] = useState(0);

   useEffect(() => {
      const calculoTotal = carrito.reduce(
         (total, producto) => total + producto.cantidad * producto.precio,
         0
      );

      setTotal(calculoTotal);
   }, [carrito]);

   return (
      <Layout pagina={"Carrito de compras"}>
         <h1 className="heading">Carrito</h1>
         <main className={`contenedor ${styles.contenido}`}>
            <div className={styles.carrito}>
               <h2>Artículos</h2>
               {carrito.length === 0
                  ? "Carrito vacío"
                  : carrito.map((c) => (
                       <div key={c.id} className={styles.producto}>
                          <div>
                             <Image
                                layout="responsive"
                                width={250}
                                height={500}
                                src={c.imagen}
                                alt=""
                             />
                          </div>
                          <div>
                             <p className={styles.nombre}>{c.nombre}</p>
                             <div className={styles.cantidad}>
                                <p>Cantidad: </p>
                                <select
                                   value={c.cantidad}
                                   className={styles.select}
                                   onChange={(e) =>
                                      actualizarCantidad({
                                         cantidad: e.target.value,
                                         id: c.id,
                                      })
                                   }
                                >
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                </select>
                             </div>
                             <p className={styles.precio}>
                                {"$"}
                                <span>{c.precio}</span>
                             </p>
                             <p className={styles.subtotal}>
                                {"Subtotal: $"}
                                <span>{c.precio * c.cantidad}</span>
                             </p>
                          </div>

                          <button
                             type="button"
                             className={styles.button}
                             onClick={() => eliminarProducto(c.id)}
                          >
                             X
                          </button>
                       </div>
                    ))}
            </div>
            <div className={styles.resumen}>
               {total > 0 ? (
                  <>
                     <h3>Resumen del pedido</h3>
                     <p>Total a pagar: {total}</p>
                  </>
               ) : (
                  <p>No hay productos</p>
               )}
            </div>
         </main>
      </Layout>
   );
};

export default Carrito;
