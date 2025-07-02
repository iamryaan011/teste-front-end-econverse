import Image from "next/image";

//styles
import styles from "../Header/Header.module.scss";

//components
import TopBar from "../TopBar/TopBar";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Header() {
  return (
    <div className={styles.Container}>
      <TopBar />

      <header className={styles.Header}>
        <Image
          src={"/images/logo.png"}
          width={140}
          height={50}
          alt="econverse logo"
        />

        <div>
          <input
            type="text"
            name="filter"
            id="filter"
            placeholder="O que você está buscando ?"
          />

          <button>
            <Image
              src={"/assets/search.png"}
              width={22}
              height={22}
              alt="search icon"
            />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">
                <Image
                  src={"/assets/delivery.png"}
                  width={30}
                  height={30}
                  alt="Delivery icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/assets/favorites.png"}
                  width={34}
                  height={26}
                  alt="Favorites icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/assets/user.png"}
                  width={34}
                  height={28}
                  alt="User icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/assets/cart.png"}
                  width={30}
                  height={28}
                  alt="Cart icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <NavigationBar />
    </div>
  );
}
