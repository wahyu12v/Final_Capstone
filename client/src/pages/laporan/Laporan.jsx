import Card from 'react-bootstrap/Card';
import { RiEarthFill, RiMapPinFill, RiFileListFill } from 'react-icons/ri';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from 'react-leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'sonner';
import Footer from '../../components/Footer/Footer';
import FormLaporan from '../../components/Form/FormLaporan';
import Navbar from '../../components/Navbar/Navbar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import 'leaflet/dist/leaflet.css';
import getGeoLocation from '../../hooks/useLocation';

const queryClient = new QueryClient();

const Laporan = () => {
  const hasRun = useRef(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!hasRun.current) {
      const getLocation = async () => {
        const loadingToast = toast.loading(
          'Mendapatkan lokasi Anda saat ini...'
        );
        try {
          const locationData = await getGeoLocation();
          setLocation(locationData);
          toast.success('Lokasi Anda di dapatkan!', {
            id: loadingToast,
          });
        } catch (error) {
          toast.error(
            'Gagal mendapatkan lokasi Anda, akses lokasi tidak diizinkan',
            {
              id: loadingToast,
            }
          );
        }
      };
      hasRun.current = true;
      getLocation();
    }
  }, []);
  const LocationMaker = () => {
    const peta = useMap();

    useEffect(() => {
      if (location && location.loaded && !location.error) {
        peta.flyTo(location.coordinates, peta.getZoom());
      }
    }, [location]);
    return <></>;
  };
  const page = [
    {
      title: 'Home',
      link: '/',
      navigate: true,
    },
    {
      title: 'Cara Kerja',
      link: '/lapor#cara',
    },
    {
      title: 'Tutorial',
      link: '/lapor#tutorial',
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" duration={4000} />
      <Navbar page={page} />
      <header className="section__container header__container" id="home">
        <div className="header__image">
          <img src="/src/assets/header.jpg" alt="header" data-aos="fade-left" />
        </div>
        <div className="header__content">
          <h1 data-aos="fade-up" data-aos-delay="500">
            Halaman Laporkan Sampah di Sistem <span>PANTAS</span>
          </h1>
          <p
            className="section__description"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Halaman ini adalah halaman yang akan digunakan dalam melaporkan
            Adanya Tumpukan Sampah Liar.
          </p>
        </div>
      </header>
      <section className="section__container special__container" id="cara">
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
      <section className="section__container client__container" id="tutorial">
        <h2 className="section__header">Apakah Masih mengalami kesulitan ?</h2>
        <p className="section__description">
          kami akan menyediakan video tutorial youtube untuk melihat bagaimana
          cara melaporkan tumpukan sampah.
        </p>
        <div className="client__swiper">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="client__card">
                  <iframe
                    width={630}
                    height={365}
                    src="https://www.youtube.com/embed/onKt1i3jrXw"
                    allowFullScreen=""
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section__container client__container"
        id="form"
        style={{ marginTop: 30 }}
      >
        <h2 className="section__header">
          Ayo Laporkan Tumpukan Sampah di sekitar Anda
        </h2>
        <p className="section__description">
          Silahkan isi form laporan berikut ini dengan tepat dan apa
          Adanya.Kontribusi anda sangat berarti bagi kita semua demi menciptakan
          lingkungan yang bersih bebas sampah.
        </p>

        <div className="row" data-aos="fade-up" data-aos-delay="500">
          <div className="col-lg mb-3">
            <Card>
              <MapContainer
                center={[-6.2, 106.816666]}
                zoom={16}
                scrollWheelZoom={true}
                style={{ height: '40vh', zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMaker />
                {location && location.loaded && !location.error && (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                  >
                    <Popup>Posisi anda saat ini</Popup>
                    <Circle
                      center={{
                        lat: location.coordinates.lat,
                        lng: location.coordinates.lng,
                      }}
                      pathOptions={{ color: 'none', fillColor: 'red' }}
                      radius={200}
                    />
                  </Marker>
                )}
              </MapContainer>
            </Card>
          </div>
          <div className="col-lg">
            <Card>
              <Card.Body>
                {location && location.loaded && !location.error ? (
                  <FormLaporan
                    lat={location.coordinates.lat}
                    lng={location.coordinates.lng}
                  />
                ) : (
                  <FormLaporan lat={0} lng={0} />
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </QueryClientProvider>
  );
};

export default Laporan;
