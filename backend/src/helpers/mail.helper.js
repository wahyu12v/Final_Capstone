import dotenv from "dotenv";
dotenv.config();

export const mailLaporanToUser = (data) => {
    return {
        from: `PANTAS Indonesia <${process.env.MAIL_USER}>`,
        to: data.emailPelapor,
        subject: "PANTAS: Laporan Baru Diterima",
        html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00923F;text-decoration:none;font-weight:600">Terima Kasih atas Laporan Anda</a>
            </div>
            <p style="font-size:1.1em">Kepada Yth. ${data.namaPelapor},</p>
            <p style="text-align: justify">Terima kasih telah melaporkan tumpukan sampah yang Anda temukan. Kami sangat menghargai kepedulian Anda terhadap kebersihan lingkungan kita.</p>
            <p style="text-align: justify"> Laporan Anda telah kami terima dan akan segera ditindaklanjuti oleh tim kami. Kami akan melakukan langkah-langkah yang diperlukan untuk memastikan masalah ini ditangani secepat mungkin.</p>
            <p style="text-align: justify">Terima kasih atas partisipasi dan perhatian Anda dalam menjaga kebersihan dan kenyamanan lingkungan kita.</p <p style="font-size:0.9em;">Salam hormat,<br />Admin PANTAS</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>PANTAS</p>
                <p>Pelaporan Aduan Tumpukan Sampah</p>
                <p>Indonesia</p>
            </div>
        </div>
    </div>`
    }
}

export const mailLaporanToAdmin = (data, laporan) => {
    return {
        from: `PANTAS Indonesia <${process.env.MAIL_USER}>`,
        to: data.email,
        subject: "Pemberitahuan: Laporan Tumpukan Sampah Baru",
        html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00923F;text-decoration:none;font-weight:600">Laporan Tumpukan Sampah Baru</a>
            </div>
            <p style="font-size:1.1em">Kepada Yth. ${data.name},</p>
            <p style="text-align: justify">Kami ingin memberitahukan bahwa kami telah menerima laporan baru mengenai tumpukan sampah. Berikut adalah rincian laporan yang telah masuk:</p>
            <strong>Pelapor                   : </strong>${laporan.pelapor.namaPelapor}<br>
            <strong>Tanggal Laporan           : </strong>${laporan.dateCreated}<br>
            <strong>Kategori Tumpukan         : </strong>${laporan.kategoriSampah == 3 ? "Parah" : (laporan.kategoriSampah == 2 ? "Sedang" : "Kecil")}<br>
            <strong>Lokasi                    : </strong><a href='https://www.google.com/maps?q=${laporan.lokasiLaporanLat},${laporan.lokasiLaporanLng}'>lihat lokasi</a><br>
            <strong>Keterangan                : </strong>${laporan.deskripsiLaporan}<br>
            <p style="text-align: justify">Mohon untuk segera menindaklanjuti laporan ini dan melakukan langkah-langkah yang diperlukan untuk menyelesaikan masalah ini.</p>
            <p style="font-size:0.9em;">Salam hormat,<br />Admin PANTAS</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>PANTAS</p>
                <p>Pelaporan Aduan Tumpukan Sampah</p>
                <p>Indonesia</p>
            </div>
        </div>
    </div>`
    }
}