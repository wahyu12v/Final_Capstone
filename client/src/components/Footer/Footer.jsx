import { RiArrowUpFill } from 'react-icons/ri';
import ScrollToTop from 'react-scroll-to-top';
export default function Footer() {
  return (
    <footer className="footer">
      <ScrollToTop
        smooth
        color="white"
        width="20"
        height="20"
        style={{ backgroundColor: '#1679ab' }}
      />
      <div className="myfooter">
        <p>&copy; 2024 - Final Capstone Dicoding</p>
      </div>
    </footer>
  );
}
