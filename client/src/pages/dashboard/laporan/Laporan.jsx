import BodyContainer from '../../../components/Container/BodyContainer';
import MainContainer from '../../../components/Container/MainContainer';
import LaporanContent from '../../../components/Content/LaporanContent';
import Sidebar from '../../../components/Sidebar/Sidebar';

export default function DashboardLaporan() {
  return (
    <BodyContainer>
      <MainContainer>
        <Sidebar>
          <LaporanContent />
        </Sidebar>
      </MainContainer>
    </BodyContainer>
  );
}
