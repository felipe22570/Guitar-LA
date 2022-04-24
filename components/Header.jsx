import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
   console.log(guitarra);

   const router = useRouter();
   return (
      <header className={styles.header}>
         <div className="contenedor">
            <div className={styles.barra}>
               {/* eslint-disable-next-line @next/next/link-passhref */}
               <Link href={"/"}>
                  <a>
                     <Image
                        className={styles.image}
                        width={360}
                        height={60}
                        src={"/img/logo.svg"}
                        alt=""
                     />
                  </a>
               </Link>

               <nav className={styles.nav}>
                  <Link href={"/"}>Inicio</Link>
                  <Link href={"/nosotros"}>Nosotros</Link>
                  <Link href={"/blog"}>Blog</Link>
                  <Link href={"/tienda"}>Tienda</Link>
                  <Link href={"/carrito"}>
                     <a>
                        <Image
                           layout="fixed"
                           width={25}
                           height={20}
                           src="/img/carrito.png"
                           alt=""
                        />
                     </a>
                  </Link>
               </nav>
            </div>

            {guitarra && (
               <div className={styles.modelo}>
                  <h1>Modelo {guitarra.attributes.nombre}</h1>
                  <p>{guitarra.attributes.descripcion}</p>
                  <p className={styles.precio}>
                     {"$"}
                     {guitarra.attributes.precio}
                  </p>
                  <Link href={`/guitarras/${guitarra.id}`}>
                     <a className={styles.enlace}>Ver producto</a>
                  </Link>
               </div>
            )}
         </div>

         {router.pathname === "/" && (
            <div className={styles.guitarra}>
               <Image
                  layout="fixed"
                  width={400}
                  height={800}
                  src="/img/header_guitarra.png"
                  alt=""
               />
            </div>
         )}
      </header>
   );
};

export default Header;
