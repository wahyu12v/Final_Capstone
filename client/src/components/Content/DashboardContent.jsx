import DashboardContainer from '../Container/DashboardContainer';
import styles from '../Container/container.module.css';
import Skeleton from 'react-loading-skeleton';
import { fetchDbLaporan } from '../../actions/laporan.action';
import TableLaporanNews from '../Table/TableLaporanNews';

export default function DashboardContent() {
  const { data: dbData, isPending: isPendingDbData } = fetchDbLaporan();

  return (
    <DashboardContainer styles={styles}>
      <h1 style={{ fontWeight: 800, fontSize: '2.6rem' }}>Dashbord</h1>
      <div className={styles.insights} style={{ marginTop: '3rem' }}>
        <div className={styles.sales}>
          <span className={`material-symbols-sharp ${styles.mbm}`}>
            supervisor_account
          </span>
          <div className={styles.middle}>
            <div className={styles.left}>
              <h3
                style={{
                  fontSize: '0.87rem',
                  fontWeight: 600,
                  marginTop: '0.7rem',
                }}
              >
                Jumlah Pelapor
              </h3>
              <h1>
                {dbData && dbData.data.pelapor}
                {isPendingDbData && <Skeleton />}
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.expenses}>
          <span className={`material-symbols-sharp ${styles.mbm}`}>
            stacked_line_chart
          </span>
          <div className={styles.middle}>
            <div className="left">
              <h3
                style={{
                  fontSize: '0.87rem',
                  fontWeight: 600,
                  marginTop: '0.7rem',
                }}
              >
                Kategori Biasa
              </h3>
              <h1>
                {dbData && dbData.data.biasa}
                {isPendingDbData && <Skeleton />}
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.income}>
          <span className={`material-symbols-sharp ${styles.mbm}`}>
            stacked_line_chart
          </span>
          <div className={styles.middle}>
            <div className={styles.left}>
              <h3
                style={{
                  fontSize: '0.87rem',
                  fontWeight: 600,
                  marginTop: '0.7rem',
                }}
              >
                Kategori Sedang
              </h3>
              <h1>
                {dbData && dbData.data.sedang}
                {isPendingDbData && <Skeleton />}
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.parah}>
          <span className={`material-symbols-sharp ${styles.mbm}`}>
            stacked_line_chart
          </span>
          <div className={styles.middle}>
            <div className={styles.left}>
              <h3
                style={{
                  fontSize: '0.87rem',
                  fontWeight: 600,
                  marginTop: '0.7rem',
                }}
              >
                Kategori Parah
              </h3>
              <h1>
                {dbData && dbData.data.parah}
                {isPendingDbData && <Skeleton />}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recent_order}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
          Laporan Terbaru
        </h2>
        <div className={styles.table_container}>
          <TableLaporanNews />
        </div>
      </div>
    </DashboardContainer>
  );
}
