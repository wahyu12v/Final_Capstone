import imgHeader from '/src/assets/header.jpg';

export default function LaporanHero() {
  return (
    <header className="section__container header__container" id="home">
      <div className="header__image">
        <img src={imgHeader} alt="header" data-aos="fade-left" />
      </div>
      <div className="header__content">
        <h1 data-aos="fade-up" data-aos-delay="500">
          Halaman Laporkan Sampah di Sistem <span>PANTAS</span>
        </h1>
        <p
          className="section__description"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Halaman ini adalah halaman yang akan digunakan dalam melaporkan Adanya
          Tumpukan Sampah Liar.
        </p>
      </div>
    </header>
  );
}
