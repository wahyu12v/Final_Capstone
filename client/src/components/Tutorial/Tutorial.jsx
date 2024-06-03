export default function Tutorial() {
  return (
    <section className="section__container client__container" id="tutorial">
      <h2 className="section__header">Apakah Masih mengalami kesulitan ?</h2>
      <p className="section__description">
        kami akan menyediakan video tutorial youtube untuk melihat bagaimana
        cara melaporkan tumpukan sampah.
      </p>
      <div className="client__swiper">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client__card">
                <iframe
                  width={630}
                  height={365}
                  src="https://www.youtube.com/embed/onKt1i3jrXw"
                  allowFullScreen=""
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
