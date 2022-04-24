import React from "react";
import Entrada from "../components/Entrada";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

const Blog = ({ data }) => {
   return (
      <Layout pagina="Blog">
         <main className="contenedor">
            <h2 className="heading">Blog</h2>

            <div className={styles.blog}>
               {data.map((d) => (
                  <Entrada key={d.id} entrada={d} />
               ))}
            </div>
         </main>
      </Layout>
   );
};

export async function getStaticProps() {
   const url = `${process.env.API_URL}/blogs`;
   const resp = await fetch(url);
   const data = await resp.json();

   return {
      props: {
         data,
      },
   };
}

export default Blog;
