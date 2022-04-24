import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
   return (
      <Layout>
         <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>
               <Image layout="responsive" width={320} height={250} src="/img/nosotros.jpg" alt="" />

               <div>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aliquid
                     consequatur corrupti quis, neque voluptatum culpa maiores dicta quasi? Fugiat
                     dignissimos repudiandae veritatis expedita soluta quas. Fugiat saepe quidem
                     iste!
                  </p>

                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aliquid
                     consequatur corrupti quis, neque voluptatum culpa maiores dicta quasi? Fugiat
                     dignissimos repudiandae veritatis expedita soluta quas. Fugiat saepe quidem
                     iste!
                  </p>
               </div>
            </div>
         </main>
      </Layout>
   );
};

export default Nosotros;
