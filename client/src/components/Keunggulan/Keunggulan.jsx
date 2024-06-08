import imgUnggul from '/src/assets/unggul.jpg';
import { RiCheckboxFill } from 'react-icons/ri';
import styles from './keunggulan.module.css';

export default function Keunggulan() {
  return (
    <section className={styles.unggul} id="unggul">
      <div
        className={`${styles.section__container} ${styles.unggul__container}`}
      >
        <div className={styles.unggul__image}>
          <img
            className="img__landing"
            src={imgUnggul}
            alt="unggul"
            data-aos="fade-right"
          />
        </div>
        <div className={styles.unggul__content}>
          <h2
            className={styles.section__header}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Keunggulan Menggunakan Sistem Pelaporan Aduan Sampah
          </h2>
          <p
            className={styles.section__description}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Menggunakan sistem pelaporan aduan sampah memiliki berbagai
            keunggulan yang membantu masyarakat untuk lebih aktif dalam menjaga
            kebersihan lingkungan.
          </p>
          <ul className={styles.unggul__list}>
            <li data-aos="fade-up" data-aos-delay="1500">
              <span>
                <RiCheckboxFill />
              </span>
              Kemudahan akses dan pelaporan yang cepat.
            </li>
            <li data-aos="fade-up" data-aos-delay="2000">
              <span>
                <RiCheckboxFill />
              </span>
              Meningkatkan partisipasi dan kesadaran masyarakat.
            </li>
            <li data-aos="fade-up" data-aos-delay="2500">
              <span>
                <RiCheckboxFill />
              </span>
              Data terorganisir dan tindak lanjut yang cepat.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
