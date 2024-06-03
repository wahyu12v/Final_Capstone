import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Definisi from '../../components/Definisi/Definisi';
import Slider from '../../components/Slider/Slider';
import Cara from '../../components/Cara/Cara';
import Keunggulan from '../../components/Keunggulan/Keunggulan';
import Team from '../../components/Team/Team';

const Home = () => {
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
      <Hero />
      <Definisi />
      <Slider />
      <Cara />
      <Keunggulan />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
