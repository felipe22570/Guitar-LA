import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers/helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ data }) => {
   const { titulo, contenido, imagen, publishedAt } = data.attributes;

   return (
      <Layout pagina={titulo}>
         <main className="contenedor">
            <h1 className="heading">{titulo}</h1>
            <article className={styles.entrada}>
               <Image layout="responsive" width={600} height={400} src={imagen} alt="" />

               <div className={styles.contenido}>
                  <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                  <p className={styles.texto}>{contenido}</p>
               </div>
            </article>
         </main>
      </Layout>
   );
};

// export async function getServerSideProps({ query: { id } }) {
//    const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
//    const resp = await fetch(url);
//    const data = await resp.json();

//    console.log(url);
//    console.log(data);

//    return {
//       props: {
//          data: data.data,
//       },
//    };
// }

export async function getStaticPaths() {
   const url = `${process.env.API_URL}/blogs`;

   const resp = await fetch(url);
   const data = await resp.json();

   const paths = data.map((d) => ({
      params: { id: d.id.toString() },
   }));

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params: { id } }) {
   const url = `${process.env.API_URL}/blogs/${id}`;
   const resp = await fetch(url);
   const data = await resp.json();

   console.log(url);
   console.log(data);

   return {
      props: {
         data,
      },
   };
}

export default EntradaBlog;
