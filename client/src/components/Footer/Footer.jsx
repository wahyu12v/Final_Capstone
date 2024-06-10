import ScrollToTop from 'react-scroll-to-top';
import styles from './footer.module.css';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer({ page }) {
  return (
    <footer className={styles.footer}>
      <ScrollToTop
        smooth
        color="white"
        width="20"
        height="20"
        style={{ backgroundColor: '#1679ab' }}
      />
      <div className={styles['footer-left']}>
        <h3>PANTAS</h3>
        <p className={styles['footer-links']}>
          <Link to={page == 1 ? '#beranda' : '/#beranda'}>Beranda</Link>|
          <Link to={page == 1 ? '#definisi' : '/#definisi'}>Definisi</Link>|
          <Link to={page == 1 ? '#tim' : '/#tim'}>Tim Kami</Link>|
          <Link to={page == 1 ? 'lapor' : '/lapor#form'} replace>
            Laporan
          </Link>
        </p>
        <p className={styles['footer-company-name']}>
          &copy; 2024 - Final Capstone Dicoding
        </p>
      </div>
      <div className={styles['footer-center']}>
        <div>
          <FaMapMarkerAlt size={10} className={styles.icon} />
          <p>Indonesia</p>
        </div>
        <div>
          <FaPhone size={10} className={styles.icon} />
          <p>0812-3456-789</p>
        </div>
        <div>
          <FaEnvelope size={10} className={styles.icon} />
          <p>
            <a href="mailto:pantasgogreen@gmail.com">pantasgogreen@gmail.com</a>
          </p>
        </div>
      </div>
      <div className={styles['footer-right']}>
        <p className={styles['footer-company-about']}>
          <span>Tentang Perusahaan</span>
          <strong>PANTAS</strong> merupakan platform pelaporan tumpukan sampah
          yang memudahkan masyarakat dalam melaporkan tumpukan sampah liar.
        </p>
        <div className={styles['footer-icons']}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
