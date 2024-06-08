import { Col, Form, Image, Row } from 'react-bootstrap';
import DashboardContainer from '../Container/DashboardContainer';
import styles from '../Container/container.module.css';
import { IoReturnDownBack } from 'react-icons/io5';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getLaporanById } from '../../actions/laporan.action';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'sonner';
export default function DetailLaporanContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: dataLaporan,
    isPending: isPendingLaporan,
    isError: isErrorLaporan,
    error,
  } = getLaporanById(id);

  if (isErrorLaporan) {
    if (error && error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    if (error) toast.error('Gagal menghubungkan ke server');
  }

  if (dataLaporan && !dataLaporan.data) {
    navigate('/not-found');
  }

  return (
    <DashboardContainer styles={styles}>
      <h1 style={{ fontWeight: 800, fontSize: '2.6rem' }}>Laporan</h1>
      <div className={styles.recent_order}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
          Detail Laporan Masuk
        </h2>
        <div className={styles.table_container}>
          {isPendingLaporan && <Skeleton height={300} width={300} />}
          {dataLaporan && dataLaporan.data && (
            <Image
              src={`${import.meta.env.VITE_BASE_URL}${
                dataLaporan.data.gambarLaporan
              }`}
              alt="Laporan"
              fluid
              thumbnail
            />
          )}

          <Form style={{ textAlign: 'left' }}>
            <Form.Group
              as={Row}
              className="mt-3 mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Kategori Tumpukan
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={20} width={300} />}
                {dataLaporan && dataLaporan.data && (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={
                      dataLaporan.data.kategoriSampah === 1
                        ? 'Kecil'
                        : dataLaporan.data.kategoriSampah === 2
                        ? 'Sedang'
                        : 'Besar'
                    }
                  />
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Nama Pelapor
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={20} width={300} />}
                {dataLaporan && dataLaporan.data && (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={dataLaporan.data.pelapor.namaPelapor}
                  />
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Email Pelapor
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={20} width={300} />}
                {dataLaporan && dataLaporan.data && (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={dataLaporan.data.pelapor.emailPelapor}
                  />
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Whatsapp Pelapor
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={20} width={300} />}
                {dataLaporan && dataLaporan.data && (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={dataLaporan.data.pelapor.nomorPelapor}
                  />
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Lokasi
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={20} width={300} />}
                {dataLaporan && dataLaporan.data && (
                  <a
                    href={`https://www.google.com/maps?q=${dataLaporan.data.lokasiLaporanLat},${dataLaporan.data.lokasiLaporanLng}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: 'none',
                      textAlign: 'left',
                      margin: 0,
                    }}
                  >
                    Lihat Lokasi
                  </a>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 fw-bold"
              controlId="formPlaintextEmail"
            >
              <Form.Label style={{ fontSize: '0.8rem' }} column sm="2">
                Deskripsi Laporan
              </Form.Label>
              <Col sm="10">
                {isPendingLaporan && <Skeleton height={60} width={400} />}
                {dataLaporan && dataLaporan.data && (
                  <Form.Control
                    as="textarea"
                    rows={3}
                    plaintext
                    readOnly
                    defaultValue={dataLaporan.data.deskripsiLaporan}
                  />
                )}
              </Col>
            </Form.Group>
          </Form>
          <Row className="mb-0">
            <Col className="d-flex justify-content-end">
              <Link
                to="/dashboard/laporan"
                className="btn btn-danger"
                style={{ fontSize: '0.8rem' }}
              >
                <IoReturnDownBack />
                Kembali
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardContainer>
  );
}
