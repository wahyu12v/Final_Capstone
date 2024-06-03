import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function Slider() {
  return (
    <section className="section__container client__container">
      <h2 className="section__header">Kenapa Kami Membuat Sistem ini ?</h2>
      <p className="section__description">
        banyaknya kasus tentang sampah liar yang bertumpukan dimana yang mana
        itu menganggu pengguna jalan,masyarakat umum dan tentunya merusak
        lingkungan hidup karena itu kami membuat sistem ini untuk membantu
        masyarakat agar bisa berperan aktif dalam menerapkan{' '}
        <span style={{ color: 'green', fontWeight: 600 }}>Go Green</span>.
      </p>
      <div className="client__swiper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="client__card">
              <iframe
                width={630}
                height={365}
                style={{ border: 'none' }}
                src="https://www.youtube.com/embed/onKt1i3jrXw"
                allowFullScreen=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <iframe
                width={630}
                height={365}
                style={{ border: 'none' }}
                src="https://www.youtube.com/embed/zSMpJ9Qzi7w"
                allowFullScreen=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <iframe
                width={630}
                height={365}
                style={{ border: 'none' }}
                src="https://www.youtube.com/embed/i0bb7Et0ots"
                allowFullScreen=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
