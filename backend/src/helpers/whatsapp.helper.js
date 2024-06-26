export const whatsappToUser = (data) => {
    return `Kepada Yth. ${data.namaPelapor}, \n\nTerima kasih telah melaporkan tumpukan sampah yang Anda temukan. Kami sangat menghargai kepedulian Anda terhadap kebersihan lingkungan kita.\n\nLaporan Anda telah kami terima dan akan segera ditindaklanjuti oleh tim kami. Kami akan melakukan langkah-langkah yang diperlukan untuk memastikan masalah ini ditangani secepat mungkin.\n\nTerima kasih atas partisipasi dan perhatian Anda dalam menjaga kebersihan dan kenyamanan lingkungan kita.\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}

export const whatsappToUserApprove = (data) => {
    return `Kepada Yth. ${data.namaPelapor}, \n\nLaporan yang Anda kirimkan sudah kami terima dan akan segera diproses oleh petugas kami. Terima Kasih.\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}

export const whatsappToUserProcess = (data) => {
    return `Kepada Yth. ${data.namaPelapor}, \n\nLaporan yang Anda kirimkan sedang diprosess petugas kami akan menuju ke lokasi yang tercatat pada laporan yang dikirimkan. Terima Kasih.\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}

export const whatsappToUserComplete = (data) => {
    return `Kepada Yth. ${data.namaPelapor}, \n\nLaporan yang Anda Kirimkan sudah selesai ditangani oleh petugas kami.Terima Kasih.\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}

export const whatsappToUserReject = (data) => {
    return `Kepada Yth. ${data.namaPelapor}, \n\nLaporan yang Anda kirimkan ditolak oleh petugas kami, silahkan perbaiki laporan yang dikirimkan. Terima Kasih.\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}

export const whatsappToAdmin = (data, laporan) => {
    return `Kepada Yth. ${data.name}, \n\nKami ingin memberitahukan bahwa sistem telah menerima laporan baru mengenai tumpukan sampah. Berikut adalah rincian laporan yang telah masuk:\n\n*Pelapor :* ${laporan.pelapor.namaPelapor}\n*Tanggal Laporan :* ${laporan.dateCreated}\n*Kategori Tumpukan :* ${laporan.kategoriSampah == 3 ? "Parah" : (laporan.kategoriSampah == 2 ? "Sedang" : "Kecil")}\n*Lokasi :* https://www.google.com/maps?q=${laporan.lokasiLaporanLat},${laporan.lokasiLaporanLng}\n*Keterangan :* ${laporan.deskripsiLaporan}\n\nMohon untuk segera menindaklanjuti laporan ini dan melakukan langkah-langkah yang diperlukan untuk menyelesaikan masalah ini.\n\nSalam hormat, Admin PANTAS\nini merupakan pesan otomatis dari sistem.`
}