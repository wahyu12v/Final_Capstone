import { RiEarthFill, RiMapPinFill, RiFileListFill } from 'react-icons/ri';
import styles from './cara.module.css';
import { Link } from 'react-router-dom';
import { IoPaperPlaneOutline } from 'react-icons/io5';

export default function Cara() {
  return (
    <section
      className={`${styles['section__container']} ${styles['special__container']}`}
      id="cara"
    >
      <h2 className={styles.section__header}>
        Bagaimana Cara menggunakan sistem ini ?
      </h2>
      <p className={styles.section__description}>
        Berikut Adalah Penjelasan singkat Bagaimana cara sistem kami digunakan
        oleh pengguna
      </p>
      <div className={styles.special__grid}>
        <div
          className={styles.banner__card}
          style={{ backgroundColor: 'white' }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className={styles.banner__icon}>
            <RiEarthFill />
          </span>
          <h4> Akses Platform PANTAS</h4>
          <p>
            Pengguna dapat mengakses sistem pelaporan sampah melalui aplikasi
            PANTAS yang tersedia di smartphone atau melalui platform web PANTAS
            yang dapat diakses dari perangkat apapun. Tidak diperlukan
            registrasi, sehingga pengguna dapat langsung menggunakan layanan
            tanpa hambatan.
          </p>
        </div>
        <div
          className={styles.banner__card}
          style={{ backgroundColor: 'white' }}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span className={styles.banner__icon}>
            <RiMapPinFill />
          </span>
          <h4>Aktifkan Lokasi dan Ambil Foto</h4>
          <p>
            Selanjutnya Pengguna hanya perlu mengaktifkan lokasi pada perangkat
            mereka, dan sistem akan secara otomatis menangkap koordinat lokasi
            tersebut. Kemudian, pengguna mengambil foto tumpukan sampah yang
            ditemukan menggunakan kamera perangkat mereka.
          </p>
        </div>
        <div
          className={styles.banner__card}
          style={{ backgroundColor: 'white' }}
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <span className={styles.banner__icon}>
            <RiFileListFill />
          </span>
          <h4>Kirimkan Laporan yang anda buat</h4>
          <p>
            Kemudian pengguna akan diminta untuk memilih tingkat keparahan
            tumpukan sampah dari opsi yang disediakan di sistem. Setelah semua
            informasi diisi, pengguna cukup menekan tombol "Kirim Laporan".
            Sistem akan mencatat laporan tersebut beserta informasi penting
            seperti lokasi dan jenis sampah yang dilaporkan.
          </p>
        </div>
      </div>
      <div className={styles.containerbutton}>
        <button className={styles['button-33']} role="button">
          <Link to="/lapor#form" reloadDocument replace>
            <IoPaperPlaneOutline size={26} /> Ayo Laporkan Sekarang{' '}
          </Link>
        </button>
      </div>
    </section>
  );
}
