import imgBertanya from '/src/assets/bertanya.png';
import styles from './definisi.module.css';

export default function Definisi() {
  return (
    <section
      className={`${styles.section__container} ${styles.explore__container}`}
      style={{ marginBottom: 30 }}
      id="definisi"
    >
      <div className={styles.explore__image}>
        <img
          className="img__landing"
          src={imgBertanya}
          alt="tanya"
          data-aos="fade-right"
        />
      </div>
      <div className={styles.explore__content}>
        <h1
          className={styles.section__header}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Apa Itu Sistem PANTAS ?
        </h1>
        <p
          className={styles.section__description}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Sistem PANTAS adalah platform pelaporan sampah yang memudahkan
          masyarakat melaporkan tumpukan sampah liar. Pengguna dapat
          mengaksesnya melalui aplikasi atau web tanpa registrasi, menggunakan
          GPS untuk menentukan lokasi, dan mengunggah foto sampah. Sistem ini
          mencatat informasi penting seperti lokasi, waktu, jenis sampah, dan
          tingkat keparahan. Dengan PANTAS, masyarakat diharapkan lebih aktif
          menjaga kebersihan lingkungan.
        </p>
      </div>
    </section>
  );
}
