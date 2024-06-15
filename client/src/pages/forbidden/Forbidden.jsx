import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/Error/Error';

export default function Forbidden() {
  const page = [
    {
      title: 'Beranda',
      link: '/',
      navigate: true,
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
      <main id="konten">
        <Error status={403} />
      </main>
      <Footer page={2} />
    </>
  );
}
