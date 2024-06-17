import BodyContainer from "../../../components/Container/BodyContainer";
import MainContainer from "../../../components/Container/MainContainer";
import PengaturanContent from "../../../components/Content/PengaturanContent";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function Pengaturan() {
  return (
    <BodyContainer>
      <MainContainer>
        <Sidebar>
        <PengaturanContent/>
        </Sidebar>
      </MainContainer>
    </BodyContainer>
  );
}
