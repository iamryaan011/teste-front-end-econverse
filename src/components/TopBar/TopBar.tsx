import Image from "next/image";

//styles
import styles from "../TopBar/TopBar.module.scss"

export default function TopBar() {
  return (
    <section className={styles.TopBar}>
      <div>
        <Image src={"/assets/ShieldCheck.png"} width={16} height={16} alt="Shield Check"/>
        Compra <mark>100% segura</mark>
      </div>

      <div>
        <Image src={"/assets/Truck.png"} width={16} height={16} alt="Shield Check"/>
        <mark>Frete Grátis</mark> acima de R$200
      </div>

      <div>
        <Image src={"/assets/CreditCard.png"} width={16} height={16} alt="Shield Check"/>
        <mark>Parcela</mark> suas compras
      </div>
    </section>
  );
}
