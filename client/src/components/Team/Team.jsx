import imgWahyu from '/src/assets/wahyu.jpg';
import imgDio from '/src/assets/dio.jpg';
import imgPutro from '/src/assets/putro.jpg';
export default function Team() {
  return (
    <section
      className="section__container team__container"
      id="team"
      style={{ marginTop: '-50px' }}
    >
      <h2 className="section__header" style={{ marginBottom: 30 }}>
        Our Team
      </h2>
      <div className="team__grid">
        <div className="team__card" data-aos="fade-up" data-aos-delay="500">
          <div className="team__image">
            <img src={imgWahyu} alt="Ardian Wahyu Saputra" />
          </div>
          <h4>Ardian Wahyu Saputra</h4>
          <p className="universitas">Universitas Muhammadiyah Riau</p>
          <p className="peran">
            Project Manager dan Front End Developer kami, bertanggung jawab atas
            manajemen proyek dan pengembangan antarmuka pengguna untuk
            memastikan pengalaman pengguna yang lancar.
          </p>
        </div>
        <div className="team__card" data-aos="fade-up" data-aos-delay="1000">
          <div className="team__image">
            <img src={imgDio} alt="Hasban Dio Saputra" />
          </div>
          <h4>Hasban Dio Saputra</h4>
          <p className="universitas">Universitas Islam Kuantan Singingi</p>
          <p className="peran">
            Front End Developer, Analis Data, dan Perancang Sistem. Bertanggung
            jawab atas pengembangan front end, analisis data, perancangan
            sistem, dan pembuatan laporan.
          </p>
        </div>
        <div className="team__card" data-aos="fade-up" data-aos-delay="1500">
          <div className="team__image">
            <img src={imgPutro} alt="Putro Dwi Mulyo" />
          </div>
          <h4>Putro Dwi Mulyo</h4>
          <p className="universitas">Universitas Bina Insani</p>
          <p className="peran">
            Backend Developer kami, bertanggung jawab atas pengembangan dan
            pengujian API, memastikan layanan backend yang kuat dan teruji
            dengan baik.
          </p>
        </div>
      </div>
    </section>
  );
}