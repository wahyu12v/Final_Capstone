import { useEffect, useState } from 'react';
import imgProfile from '../../assets/profile.jpg';
import styles from './sidebar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { actionGetUser } from '../../actions/masuk.action';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'sonner';
import { confirmAlert } from 'react-confirm-alert';
import axiosUtil from '../../utils/axios.utils';

export default function Sidebar({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: userData,
    isPending: isPendingUserData,
    isError: isErrorUserData,
    error,
  } = actionGetUser();

  const userKeluar = () => {
    const promise = async () => {
      try {
        await axiosUtil.delete('/users');
      } catch (error) {
        throw new Error(error);
      }
    };

    toast.promise(promise, {
      loading: 'Menunggu...',
      success: () => {
        setTimeout(() => {
          localStorage.clear();
          navigate('/masuk');
        }, 2000);
        return `Berhasil keluar`;
      },
      error: 'Gagal Keluar',
    });
  };

  if (isErrorUserData) {
    if (error && error.response && error.response.status === 401) {
      localStorage.clear();
      navigate('/masuk');
    } else if (error && error.response) {
      return toast.error('Gagal menghubungkan ke server');
    } else {
      return toast.error('Gagal menghubungkan ke server');
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/masuk');
    }
  }, []);

  const KonfirmasiKeluar = () => {
    confirmAlert({
      title: 'Keluar Dashboard',
      message: 'Anda yakin ingin keluar dari dashboard?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            userKeluar();
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <aside
        className={`${styles.aside_admin}`}
        style={{ display: menuOpen && 'block' }}
      >
        <div className={styles.top}>
          <div className={styles.logo}>
            <h2
              style={{
                paddingLeft: '1rem',
                paddingTop: '0.6rem',
                fontWeight: 800,
                fontSize: '1.5rem',
                display: 'inline',
                color: '#41b06e',
              }}
            >
              PANTAS
            </h2>
          </div>
          <div
            className={styles.close}
            id="close_btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-sharp">close</span>
          </div>
        </div>
        <div className={styles.sidebar}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.active : '')}
            end
          >
            <span className="material-symbols-sharp">grid_view </span>
            <h3>Dashbord</h3>
          </NavLink>
          <NavLink
            to="/dashboard/laporan"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            <span className="material-symbols-sharp">receipt_long </span>
            <h3>Laporan</h3>
          </NavLink>
          <a href="#" onClick={KonfirmasiKeluar}>
            <span
              className="material-symbols-sharp"
              style={{ color: '#ff7782' }}
            >
              logout{' '}
            </span>
            <h3 className={styles.danger}>Keluar</h3>
          </a>
        </div>
      </aside>
      {children}
      <div className={styles.right}>
        <div className={styles.top}>
          <button id="menu_bar" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-sharp">menu</span>
          </button>
          <div className={styles.profile}>
            <div className={styles.info}>
              <p>
                <b>
                  {userData && userData.data.name}
                  {isPendingUserData && <Skeleton />}
                </b>
              </p>
              <p style={{ marginTop: '-1rem' }}>Admin</p>
            </div>
            <div className={styles['profile-photo']}>
              <img src={imgProfile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
