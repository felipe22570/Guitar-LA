import React from "react";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ data }) => {
   return (
      <Layout pagina="Tienda">
         <main className="contenedor">
            <h1 className="heading">Nuestra colección</h1>

            <Listado guitarras={data} />
         </main>
      </Layout>
   );
};

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

export default Tienda;
