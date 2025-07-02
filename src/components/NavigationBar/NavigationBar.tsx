import styles from "../NavigationBar/NavigationBar.module.scss";

//next components
import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className={styles.NavigationBar}>
      <ul>
        <li>
          <a href="#">TODAS CATEGORIAS</a>
        </li>

        <li>
          <a href="#">SUPERMERCADOS</a>
        </li>

        <li>
          <a href="#">LIVROS</a>
        </li>

        <li>
          <a href="#">MODA</a>
        </li>

        <li>
          <a href="#">LANÇAMENTOS</a>
        </li>

        <li>
          <a href="#">
            <mark>OFERTAS DO DIA</mark>
          </a>
        </li>

        <li>
          <a href="#">
            {" "}
            <Image
              src="/assets/crown.png"
              width={20}
              height={16}
              alt="Crown icon"
            />
            ASSINATURA
          </a>
        </li>
      </ul>
    </nav>
  );
}
