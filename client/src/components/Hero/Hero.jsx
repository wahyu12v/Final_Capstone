import imgHero from '/src/assets/hero.jpg';

export default function Hero() {
  return (
    <header className="section__container header__container" id="home">
      <div className="header__image">
        <img src={imgHero} alt="header" data-aos="fade-left" />
      </div>
      <div className="header__content">
        <h1 data-aos="fade-up" data-aos-delay="500">
          Selamat Datang di Sistem <span>PANTAS</span>
        </h1>
        <p
          className="section__description"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Tempat dimana anda bisa berkontribusi dalam meningkatkan lingkungan
          yang bersih dengan melakukan pelaporan adanya tumpukan sampah liar.
        </p>
        <div className="header__btn" data-aos="fade-up" data-aos-delay="1500">
          <button className="btn">
            <a href="#cara">Get Started</a>{' '}
          </button>
        </div>
      </div>
    </header>
  );
}
