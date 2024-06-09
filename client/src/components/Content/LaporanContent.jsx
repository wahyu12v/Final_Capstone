import DashboardContainer from '../Container/DashboardContainer';
import styles from '../Container/container.module.css';
import TableLaporanMasuk from '../Table/TableLaporanMasuk';
export default function LaporanContent() {
  return (
    <DashboardContainer styles={styles}>
      <h1 style={{ fontWeight: 800, fontSize: '2.6rem' }}>Laporan</h1>
      <div className={styles.recent_order}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
          Daftar Laporan Masuk
        </h2>
        <div className={styles.table_container}>
          <TableLaporanMasuk />
        </div>
      </div>
    </DashboardContainer>
  );
}
