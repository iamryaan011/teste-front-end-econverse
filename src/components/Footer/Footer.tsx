import styles from "../../components/Footer/Footer.module.scss";

//next components
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <section
        aria-labelledby="newsletter-title"
        className={styles.newsletter_section}
      >
        <article>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </article>

        <form>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />

          <button type="submit">INSCREVER</button>

          <label>
            <input type="checkbox" name="accept-term" required />
            Aceito os termos e condições
          </label>
        </form>
      </section>

      <section className={styles.footer_informations}>
        <div className={styles.social_medias}>
          <Image
            src={"/images/no-bg-2.png"}
            width={164}
            height={48}
            alt="Facebook logo"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <nav aria-label="Redes sociais">
            <a href="#">
              <Image
                src={"/assets/instagram.png"}
                width={24}
                height={24}
                alt="Instagram logo"
              />
            </a>
            <a href="#">
              <Image
                src={"/assets/facebook.png"}
                width={24}
                height={24}
                alt="Facebook logo"
              />
            </a>
            <a href="#">
              <Image
                src={"/assets/linkedin.png"}
                width={24}
                height={24}
                alt="Linkedin logo"
              />
            </a>
          </nav>
        </div>

        <div className={styles.terms_of_use}>
            <nav aria-label="Institucional">
              <h3>Institucional</h3>
              <ul>
                <li>
                  <a href="#">Sobre Nós</a>
                </li>
                <li>
                  <a href="#">Movimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Ajuda">
              <h3>Ajuda</h3>
              <ul>
                <li>
                  <a href="#">Suporte</a>
                </li>
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="#">Perguntas Frequentes</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Termos">
              <h3>Termos</h3>
              <ul>
                <li>
                  <a href="#">Termos e Condições</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Troca e Devolução</a>
                </li>
              </ul>
            </nav>
        </div>
      </section>

      <div className={styles.bottom_div}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
