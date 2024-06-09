
import { format, register } from 'timeago.js';
const localeFunc = (number, index, totalSec) => {
    // number: the timeago / timein number;
    // index: the index of array below;
    // totalSec: total seconds between date to be formatted and today's date;
    return [
        ['baru saja', 'sekarang'],
        ['%s detik yang lalu', 'dalam %s detik'],
        ['1 menit yang lalu', 'dalam 1 menit'],
        ['%s menit yang lalu', 'dalam %s menit'],
        ['1 jam yang lalu', 'dalam 1 jam'],
        ['%s jam yang lalu', 'dalam %s jam'],
        ['1 hari yang lalu', 'dalam 1 hari'],
        ['%s hari yang lalu', 'dalam %s hari'],
        ['1 minggu yang lalu', 'dalam 1 minggu'],
        ['%s minggu yang lalu', 'dalam %s minggu'],
        ['1 bulan yang lalu', 'dalam 1 bulan'],
        ['%s bulan lalu', 'dalam %s bulan'],
        ['1 tahun yang lalu', 'dalam 1 tahun'],
        ['%s tahun yang lalu', 'dalam %s tahun'],
    ][index];
};
register('id_ID', localeFunc);

export default function formatDateData(date) {
    return format(date, 'id_ID');
}