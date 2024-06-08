import styles from './error.module.css';
import imgNf from '/src/assets/404.jpg';
import imgFb from '/src/assets/403.jpg';
import { Link } from 'react-router-dom';

export default function Error({ status }) {
  return (
    <div className={styles.container__error}>
      <div className={styles.header__error}>
        <h1>{status}</h1>
        <h3>
          {status == '403' ? 'Akses Dilarang!' : 'Halaman Tidak Ditemukan!'}
        </h3>
      </div>
      <img
        src={status == '403' ? imgFb : imgNf}
        alt={status == '403' ? 'Forbidden' : 'Not Found'}
      />
      <div className={styles.footer__error}>
        <p>
          {status == '403'
            ? 'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan kembali ke beranda!'
            : `Maaf, halaman yang Anda minta tidak dapat ditemukan. Silakan kembali
          ke beranda!`}
        </p>
        <button>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            KEMBALI KE BERANDA
          </Link>
        </button>
      </div>
    </div>
  );
}
