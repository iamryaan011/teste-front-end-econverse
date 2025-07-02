import styles from "../RelatedProductsFilter/RelatedProductsFilter.module.scss";

//next components
import Image from "next/image";

export default function RelatedProductsFilter() {
  return (
    <section className={styles.RelatedProductsFilter}>
      <article>
          <div>
            <Image src={"/assets/image.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Tecnologia</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/supermercados 1.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Supermercado</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/whiskey.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Bebidas</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/ferramentas 1.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Ferramentas</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/cuidados-de-saude 1.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Saúde</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/corrida 1.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Esporte e Fitness</h1>
      </article>
      <article>
          <div>
            <Image src={"/assets/moda 1.png"} width={60} height={60} alt="Image"/>
          </div>

          <h1>Moda</h1>
      </article>
    </section>
  );
}
