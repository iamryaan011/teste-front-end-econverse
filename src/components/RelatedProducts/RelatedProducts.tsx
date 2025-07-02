import styles from "../RelatedProducts/RelatedProducts.module.scss";

//components
import Modal from "../Modal/Modal";

//next components
import Image from "next/image";

//react hooks
import { useEffect, useState } from "react";

//types
import { Products } from "../../types/Products";

export default function RelatedProducts() {
  const [modal, setModal] = useState<boolean>(false);

  const [products, setProducts] = useState<Products[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);

  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  let numOfProducts = 4;

  useEffect(() => {
    getItems();
  }, []);

  //funções handle next e prev
  const handleNext = () => {
    const maxStartIndex = Math.max(products.length - numOfProducts, 0);
    setStartIndex((prev) => Math.min(prev + numOfProducts, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - numOfProducts, 0));
  };

  const getItems = () => {
    fetch("/data/produtos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! Status ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {modal && selectedProduct && (
        <Modal
          productName={selectedProduct.productName}
          descriptionShort={selectedProduct.descriptionShort}
          photo={selectedProduct.photo}
          price={selectedProduct.price}
          onClose={() => setModal(false)}
        />
      )}

      <section className={styles.RelatedProducts}>
        <h1>Produtos Relacionados</h1>

        <nav>
          <ul>
            <li>
              <a href="#">Celular</a>
            </li>
            <li>
              <a href="#">Acessórios</a>
            </li>
            <li>
              <a href="#">Tablets</a>
            </li>
            <li>
              <a href="#">Notebooks</a>
            </li>
            <li>
              <a href="#">TVS</a>
            </li>
            <li>
              <a href="#">Ver Todos</a>
            </li>
          </ul>
        </nav>

        <article>
          <div
            className={styles.slide + " " + styles.left}
            onClick={() => handlePrev()}
          >
            <Image
              src={"/assets/Left Arrow.png"}
              width={7.47}
              height={12.8}
              alt="Left arrow"
            />
          </div>

          {products
            .slice(startIndex, startIndex + numOfProducts)
            .map((value, key) => (
              <div
                className={styles.card}
                onClick={() => {
                  setSelectedProduct(value);
                  setModal(true);
                }}
                key={key}
              >
                <Image
                  src={value.photo}
                  width={278.1}
                  height={228}
                  alt={value.productName + " image"}
                />

                <div className={styles.content}>
                  <p>{value.productName}</p>

                  <div className={styles.price}>
                    <del>R${(value.price + (value.price / 100) * 50).toLocaleString("pt-BR")}</del>
                    <span>R${value.price.toLocaleString("pt-BR")},00</span>
                    <p>ou 2x de R${(value.price / 2).toLocaleString("pt-BR")},00 sem juros</p>
                  </div>

                  <p>Frete Grátis</p>

                  <button>COMPRAR</button>
                </div>
              </div>
            ))}

          <div
            className={styles.slide + " " + styles.right}
            onClick={() => handleNext()}
          >
            <Image
              src={"/assets/Right Arrow.png"}
              width={7.47}
              height={12.8}
              alt="Right arrow"
            />
          </div>
        </article>
      </section>
    </>
  );
}
