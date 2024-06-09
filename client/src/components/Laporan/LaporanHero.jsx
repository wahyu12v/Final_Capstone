import imgHeader from '/src/assets/header.jpg';
import styles from './laporan.module.css';

export default function LaporanHero() {
  return (
    <header
      className={`${styles.section__container} ${styles.header__container}`}
      id="home"
    >
      <div className={styles.header__image}>
        <img
          className="img__landing"
          src={imgHeader}
          alt="header"
          data-aos="fade-left"
        />
      </div>
      <div className={styles.header__content}>
        <h1 data-aos="fade-up" data-aos-delay="500">
          Halaman Laporkan Sampah di Sistem <span>PANTAS</span>
        </h1>
        <p
          className={styles.section__description}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Halaman ini adalah halaman yang akan digunakan dalam melaporkan Adanya
          Tumpukan Sampah Liar.
        </p>
      </div>
    </header>
  );
}
