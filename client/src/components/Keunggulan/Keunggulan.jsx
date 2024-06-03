import imgUnggul from '/src/assets/unggul.jpg';
import { RiCheckboxFill } from 'react-icons/ri';

export default function Keunggulan() {
  return (
    <section className="unggul" id="unggul">
      <div className="section__container unggul__container">
        <div className="unggul__image">
          <img src={imgUnggul} alt="unggul" data-aos="fade-right" />
        </div>
        <div className="unggul__content">
          <h2
            className="section__header"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Keunggulan Menggunakan Sistem Pelaporan Aduan Sampah
          </h2>
          <p
            className="section__description"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Menggunakan sistem pelaporan aduan sampah memiliki berbagai
            keunggulan yang membantu masyarakat untuk lebih aktif dalam menjaga
            kebersihan lingkungan.
          </p>
          <ul className="unggul__list">
            <li data-aos="fade-up" data-aos-delay="1500">
              <span>
                <RiCheckboxFill />
              </span>
              Kemudahan akses dan pelaporan yang cepat.
            </li>
            <li data-aos="fade-up" data-aos-delay="2000">
              <span>
                <RiCheckboxFill />
              </span>
              Meningkatkan partisipasi dan kesadaran masyarakat.
            </li>
            <li data-aos="fade-up" data-aos-delay="2500">
              <span>
                <RiCheckboxFill />
              </span>
              Data terorganisir dan tindak lanjut yang cepat.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
