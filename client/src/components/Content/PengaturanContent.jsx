import DashboardContainer from '../Container/DashboardContainer';
import styles from '../Container/container.module.css';
import FormPengaturan from '../Form/FormPengaturan';
export default function PengaturanContent() {
  return (
    <DashboardContainer styles={styles}>
      <h1 style={{ fontWeight: 800, fontSize: '2.6rem' }}>Pengaturan</h1>
      <div className={styles.recent_order}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
          Ubah Kata Sandi
        </h2>
        <div className={styles.table_container}>
          <FormPengaturan />
        </div>
      </div>
    </DashboardContainer>
  );
}
