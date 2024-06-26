import Card from 'react-bootstrap/Card';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from 'react-leaflet';
import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import Footer from '../../components/Footer/Footer';
import FormLaporan from '../../components/Form/FormLaporan';
import Navbar from '../../components/Navbar/Navbar';
import getGeoLocation from '../../hooks/useLocation';
import LaporanHero from '../../components/Laporan/LaporanHero';
import Cara from '../../components/Cara/Cara';
import Tutorial from '../../components/Tutorial/Tutorial';
import LaporanSection from '../../components/Laporan/LaporanSection';
import imgIcon from '/src/assets/marker-icon.png';
import imgRIcon from '/src/assets/recyle-icon.png';
import { getListLaporanLand } from '../../actions/laporan.action';
import Moment from 'react-moment';
import 'moment/locale/id';

const Laporan = () => {
  const hasRun = useRef(false);
  const [location, setLocation] = useState(null);

  const { data: dataLaporan, isPending: isPendingLaporan } =
    getListLaporanLand();

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

  const icon = L.icon({
    iconUrl: imgIcon,
    iconRetinaUrl: imgIcon,
    iconSize: [25, 41],
  });
  const iconTemp = L.icon({
    iconUrl: imgRIcon,
    iconRetinaUrl: imgRIcon,
    iconSize: [100, 100],
    iconAnchor: [50, 65],
    popupAnchor: [-1, -45],
  });

  const page = [
    {
      title: 'Beranda',
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
    {
      title: 'Laporan',
      link: '/lapor#form',
    },
  ];

  return (
    <>
      <Navbar page={page} />
      <LaporanHero />
      <main id="konten">
        <Cara />
        <Tutorial />
        <LaporanSection>
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
                  {dataLaporan &&
                    dataLaporan.data &&
                    dataLaporan.data.length > 0 &&
                    dataLaporan.data.map((item) => (
                      <Marker
                        position={[
                          item.lokasiLaporanLat,
                          item.lokasiLaporanLng,
                        ]}
                        icon={iconTemp}
                        key={item.laporanId}
                      >
                        <Popup>
                          <b>Kategori tumpukan:</b>{' '}
                          {item.kategoriSampah === 3
                            ? 'Parah'
                            : item.kategoriSampah === 2
                            ? 'Sedang'
                            : 'Kecil'}
                          <br />
                          <b>Dilaporkan pada:</b>{' '}
                          <Moment locale="id" format="dddd, DD MMMM YYYY hh:mm">
                            {item.dateCreated}
                          </Moment>
                        </Popup>
                        <Circle
                          center={{
                            lat: item.lokasiLaporanLat,
                            lng: item.lokasiLaporanLng,
                          }}
                          pathOptions={{
                            color: 'none',
                            fillColor:
                              item.kategoriSampah === 3
                                ? 'red'
                                : item.kategoriSampah === 2
                                ? 'orange'
                                : 'green',
                          }}
                          radius={
                            item.kategoriSampah === 3
                              ? 200
                              : item.kategoriSampah === 2
                              ? 150
                              : 100
                          }
                        />
                      </Marker>
                    ))}
                  {location && location.loaded && !location.error && (
                    <Marker
                      position={[
                        location.coordinates.lat,
                        location.coordinates.lng,
                      ]}
                      icon={icon}
                    >
                      <Popup>Posisi anda saat ini</Popup>
                      <Circle
                        center={{
                          lat: location.coordinates.lat,
                          lng: location.coordinates.lng,
                        }}
                        pathOptions={{ color: 'none', fillColor: 'cyan' }}
                        radius={200}
                      />
                    </Marker>
                  )}
                </MapContainer>
              </Card>
            </div>
            <div className="col-lg-6">
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
        </LaporanSection>
      </main>
      <Footer page={2} />
    </>
  );
};

export default Laporan;
