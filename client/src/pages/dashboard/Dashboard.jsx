import BodyContainer from '../../components/Container/BodyContainer';
import MainContainer from '../../components/Container/MainContainer';
import DashboardContent from '../../components/Content/DashboardContent';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <BodyContainer>
      <MainContainer>
        <Sidebar>
          <DashboardContent />
        </Sidebar>
      </MainContainer>
    </BodyContainer>
  );
}
