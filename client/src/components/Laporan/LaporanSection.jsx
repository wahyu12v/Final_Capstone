export default function LaporanSection({ children }) {
  return (
    <section
      className="section__container client__container"
      id="form"
      style={{ marginTop: 30 }}
    >
      <h2 className="section__header">
        Ayo Laporkan Tumpukan Sampah di sekitar Anda
      </h2>
      <p className="section__description">
        Silahkan isi form laporan berikut ini dengan tepat dan apa
        Adanya.Kontribusi anda sangat berarti bagi kita semua demi menciptakan
        lingkungan yang bersih bebas sampah.
      </p>
      {children}
    </section>
  );
}
