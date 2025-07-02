import styles from "../Modal/Modal.module.scss";

//next components
import Image from "next/image";

//react components
import { useState } from "react";

//types
import { ModalProps } from "../../types/ModalProps";

export default function Modal({
  onClose,
  productName,
  descriptionShort,
  photo,
  price,
}: ModalProps) {
  const [count, setCount] = useState<number>(1);

  return (
    <div className={styles.Modal}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <Image
            src={photo}
            width={247}
            height={192}
            alt={productName + " image"}
          />
          <div className={styles.info}>
            <h2>{productName}</h2>
            <p className={styles.price}>R${price.toLocaleString("pt-BR")},00</p>
            <p className={styles.desc}>{descriptionShort}</p>
            <a href="#" className={styles.detailsLink}>
              Veja mais detalhes do produto &gt;
            </a>
            <div className={styles.actionRow}>
              <div className={styles.quantity}>
                <Image
                  src={"/assets/minus.png"}
                  width={20}
                  height={20}
                  alt="Minus icon"
                  onClick={() =>
                    setCount((value) => (value === 1 ? 1 : value - 1))
                  }
                />
                <span>{count}</span>
                <Image
                  src={"/assets/Plus.png"}
                  width={20}
                  height={20}
                  alt="Plus icon"
                  onClick={() => setCount((value) => value + 1)}
                />
              </div>
              <button className={styles.buyBtn}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
