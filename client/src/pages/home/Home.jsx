import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import {
  RiEarthFill,
  RiMapPinFill,
  RiFileListFill,
  RiCheckboxFill,
} from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

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
      <section
        className="section__container explore__container"
        style={{ marginBottom: 30 }}
        id="definisi"
      >
        <div className="explore__image">
          <img
            src="/src/assets/bertanya.png"
            alt="tanya"
            data-aos="fade-right"
          />
        </div>
        <div className="explore__content">
          <h1
            className="section__header"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Apa Itu Sistem PANTAS ?
          </h1>
          <p
            className="section__description"
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
      <section className="section__container client__container">
        <h2 className="section__header">Kenapa Kami Membuat Sistem ini ?</h2>
        <p className="section__description">
          banyaknya kasus tentang sampah liar yang bertumpukan dimana yang mana
          itu menganggu pengguna jalan,masyarakat umum dan tentunya merusak
          lingkungan hidup karena itu kami membuat sistem ini untuk membantu
          masyarakat agar bisa berperan aktif dalam menerapkan{' '}
          <span style={{ color: 'green', fontWeight: 600 }}>Go Green</span>.
        </p>
        <div className="client__swiper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="client__card">
                <iframe
                  width={630}
                  height={365}
                  style={{ border: 'none' }}
                  src="https://www.youtube.com/embed/onKt1i3jrXw"
                  allowFullScreen=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client__card">
                <iframe
                  width={630}
                  height={365}
                  style={{ border: 'none' }}
                  src="https://www.youtube.com/embed/zSMpJ9Qzi7w"
                  allowFullScreen=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client__card">
                <iframe
                  width={630}
                  height={365}
                  style={{ border: 'none' }}
                  src="https://www.youtube.com/embed/i0bb7Et0ots"
                  allowFullScreen=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="section__container special__container">
        <h2 className="section__header">
          Bagaimana Cara menggunakan sistem ini ?
        </h2>
        <p className="section__description">
          Berikut Adalah Penjelasan singkat Bagaimana cara sistem kami digunakan
          oleh pengguna
        </p>
        <div className="special__grid">
          <div
            className="banner__card"
            style={{ backgroundColor: 'white' }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="banner__icon">
              <RiEarthFill />
            </span>
            <h4> Akses Platform PANTAS</h4>
            <p>
              Pengguna dapat mengakses sistem pelaporan sampah melalui aplikasi
              PANTAS yang tersedia di smartphone atau melalui platform web
              PANTAS yang dapat diakses dari perangkat apapun. Tidak diperlukan
              registrasi, sehingga pengguna dapat langsung menggunakan layanan
              tanpa hambatan.
            </p>
          </div>
          <div
            className="banner__card"
            style={{ backgroundColor: 'white' }}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <span className="banner__icon">
              <RiMapPinFill />
            </span>
            <h4>Aktifkan Lokasi dan Ambil Foto</h4>
            <p>
              Selanjutnya Pengguna hanya perlu mengaktifkan lokasi pada
              perangkat mereka, dan sistem akan secara otomatis menangkap
              koordinat lokasi tersebut. Kemudian, pengguna mengambil foto
              tumpukan sampah yang ditemukan menggunakan kamera perangkat
              mereka.
            </p>
          </div>
          <div
            className="banner__card"
            style={{ backgroundColor: 'white' }}
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <span className="banner__icon">
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
      </section>
      <section className="unggul" id="unggul">
        <div className="section__container unggul__container">
          <div className="unggul__image">
            <img
              src="/src/assets/unggul.jpg"
              alt="unggul"
              data-aos="fade-right"
            />
          </div>
          <div className="unggul__content">
            <h2
              className="section__header"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Keunggulan Menggunakan Sistem Pelaporan Aduan Sampah
            </h2>
            <p
              className="section__description"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Menggunakan sistem pelaporan aduan sampah memiliki berbagai
              keunggulan yang membantu masyarakat untuk lebih aktif dalam
              menjaga kebersihan lingkungan.
            </p>
            <ul className="unggul__list">
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
      <section
        className="section__container team__container"
        id="team"
        style={{ marginTop: '-50px' }}
      >
        <h2 className="section__header" style={{ marginBottom: 30 }}>
          Our Team
        </h2>
        <div className="team__grid">
          <div className="team__card" data-aos="fade-up" data-aos-delay="500">
            <div className="team__image">
              <img src="/src/assets/wahyu.jpg" alt="Ardian Wahyu Saputra" />
            </div>
            <h4>Ardian Wahyu Saputra</h4>
            <p className="universitas">Universitas Muhammadiyah Riau</p>
            <p className="peran">
              Project Manager dan Front End Developer kami, bertanggung jawab
              atas manajemen proyek dan pengembangan antarmuka pengguna untuk
              memastikan pengalaman pengguna yang lancar.
            </p>
          </div>
          <div className="team__card" data-aos="fade-up" data-aos-delay="1000">
            <div className="team__image">
              <img src="/src/assets/dio.jpg" alt="Hasban Dio Saputra" />
            </div>
            <h4>Hasban Dio Saputra</h4>
            <p className="universitas">Universitas Islam Kuantan Singingi</p>
            <p className="peran">
              Front End Developer, Analis Data, dan Perancang Sistem.
              Bertanggung jawab atas pengembangan front end, analisis data,
              perancangan sistem, dan pembuatan laporan.
            </p>
          </div>
          <div className="team__card" data-aos="fade-up" data-aos-delay="1500">
            <div className="team__image">
              <img src="/src/assets/putro.jpg" alt="Putro Dwi Mulyo" />
            </div>
            <h4>Putro Dwi Mulyo</h4>
            <p className="universitas">Universitas Bina Insani</p>
            <p className="peran">
              Backend Developer kami, bertanggung jawab atas pengembangan dan
              pengujian API, memastikan layanan backend yang kuat dan teruji
              dengan baik.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
