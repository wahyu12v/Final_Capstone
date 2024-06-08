import ScrollToTop from 'react-scroll-to-top';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ScrollToTop
        smooth
        color="white"
        width="20"
        height="20"
        style={{ backgroundColor: '#1679ab' }}
      />
      <div className={styles.myfooter}>
        <p>&copy; 2024 - Final Capstone Dicoding</p>
      </div>
    </footer>
  );
}
