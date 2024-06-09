import imgLogin from '../../assets/logo/45.png';
import { Link, useNavigate } from 'react-router-dom';
import FormMasuk from '../../components/Form/FormMasuk';
import { useEffect } from 'react';
import styles from './masuk.module.css';

const Masuk = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className={`row border ${styles['rounded-5']} p-3 bg-white shadow ${styles['box-area']}`}
      >
        <div
          className={`col-md-6 ${styles['rounded-4']} d-flex justify-content-center align-items-center flex-column ${styles['left-box']}`}
          style={{ backgroundColor: 'white' }}
        >
          <div className="featured-image-login mb-3">
            <img
              src={imgLogin}
              alt="image-logo-login"
              style={{ width: '300px' }}
            />
          </div>
        </div>
        <div className={`col-md-6 ${styles['right-box']}`}>
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Hallo, Admin</h2>
              <p>Silahkan login untuk melanjutkan</p>
            </div>
            <FormMasuk />
          </div>
        </div>
        <p className="text-center text-muted" style={{ fontSize: 'small' }}>
          Copyright ©{' '}
          <Link to="/" className="text-dark">
            <b>PANTAS</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Masuk;
