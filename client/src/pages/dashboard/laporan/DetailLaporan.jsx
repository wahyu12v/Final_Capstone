import { Navigate, useParams } from 'react-router-dom';
import BodyContainer from '../../../components/Container/BodyContainer';
import MainContainer from '../../../components/Container/MainContainer';
import DetailLaporanContent from '../../../components/Content/DetailLaporanContent';
import Sidebar from '../../../components/Sidebar/Sidebar';

export default function DetailLaporan() {
  const { id } = useParams();
  return !isNaN(id) ? (
    <BodyContainer>
      <MainContainer>
        <Sidebar>
          <DetailLaporanContent />
        </Sidebar>
      </MainContainer>
    </BodyContainer>
  ) : (
    <Navigate to="/not-found" replace />
  );
}
