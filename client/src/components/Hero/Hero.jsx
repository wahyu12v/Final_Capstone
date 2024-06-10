import imgHero from '/src/assets/hero.jpg';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <header
      className={`${styles.section__container} ${styles.header__container}`}
      id="beranda"
    >
      <div className={styles.header__image}>
        <img
          className="img__landing"
          src={imgHero}
          alt="header"
          data-aos="fade-left"
        />
      </div>
      <div className={styles.header__content}>
        <h1 data-aos="fade-up" data-aos-delay="500">
          Selamat Datang di Sistem <span>PANTAS</span>
        </h1>
        <p
          className={styles.section__description}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Tempat dimana anda bisa berkontribusi dalam meningkatkan lingkungan
          yang bersih dengan melakukan pelaporan adanya tumpukan sampah liar.
        </p>
        <div className={styles.header__btn}></div>
      </div>
    </header>
  );
}
