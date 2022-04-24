import Head from "next/head";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ data }) {
   return (
      <Layout pagina="Inicio" guitarra={data[3]}>
         <main className="contenedor">
            <h1 className="heading">Nuestra colección</h1>
            <Listado guitarras={data} />
         </main>

         <Curso />
      </Layout>
   );
}

export async function getServerSideProps() {
   const url = `${process.env.API_URL}/guitarras`;
   const resp = await fetch(url);
   const data = await resp.json();

   return {
      props: {
         data,
      },
   };
}
