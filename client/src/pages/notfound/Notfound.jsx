import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function Notfound() {
  const page = [
    {
      title: 'Home',
      link: '/#home',
    },
    {
      title: 'Definisi',
      link: '/#definisi',
    },
    {
      title: 'Team Kami',
      link: '/#team',
    },
    {
      title: 'Laporan',
      link: '/lapor',
      navigate: true,
    },
  ];

  return (
    <>
      <Navbar page={page} />
      <div>NOT FOUND</div>
      <Footer />
    </>
  );
}
