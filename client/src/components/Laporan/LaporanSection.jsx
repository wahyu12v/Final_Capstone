import styles from './laporan.module.css';

export default function LaporanSection({ children }) {
  return (
    <section
      className={`${styles.section__container} ${styles.client__container}`}
      id="form"
      style={{ marginTop: 30 }}
    >
      <h2 className={styles.section__header}>
        Ayo Laporkan Tumpukan Sampah di sekitar Anda
      </h2>
      <p className={styles.section__description}>
        Silahkan isi form laporan berikut ini dengan tepat dan apa
        Adanya.Kontribusi anda sangat berarti bagi kita semua demi menciptakan
        lingkungan yang bersih bebas sampah.
      </p>
      {children}
    </section>
  );
}
