import styles from "../HomeTopSection/HomeTopSection.module.scss";

export default function HomeTopSection() {
  return (
    <section className={styles.HomeTopSection}>
      <article>
        <p>Venha conhecer nossas promoções</p>

        <span><mark>50% Off</mark> nos produtos</span>

        <button>Ver produto</button>
      </article>
    </section>
  );
}
