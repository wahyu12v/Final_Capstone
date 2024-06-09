import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axiosUtil from '../../utils/axios.utils';
import TableSkeletonCustom from '../Skeleton/TableSkeleton';
import { Badge } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/id';

const columns = [
  {
    name: 'Nama Pelapor',
    selector: (row) => row.pelapor.namaPelapor,
  },
  {
    name: 'Waktu dibuat',
    selector: (row) => (
      <Moment locale="id" fromNow>
        {row.dateCreated}
      </Moment>
    ),
  },
  {
    name: 'Kategori',
    cell: (row) => (
      <Badge
        pill
        bg={
          row.kategoriSampah === 1
            ? 'success'
            : row.kategoriSampah === 2
            ? 'warning'
            : 'danger'
        }
        text="dark"
        className="text-white"
        style={
          row.kategoriSampah === 3
            ? { backgroundColor: 'green!important' }
            : null
        }
      >
        {row.kategoriSampah === 1
          ? 'Kecil'
          : row.kategoriSampah === 2
          ? 'Sedang'
          : 'Parah'}
      </Badge>
    ),
  },
];

export default function TableLaporanNews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchLaporants = async (page) => {
    setLoading(true);
    const response = await axiosUtil.get(
      `laporans/news?page=${page}&size=${perPage}`
    );
    if (response && response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    setData(response.data.data.laporans);
    setTotalRows(response.data.data.pagging.total);
    setLoading(false);
  };

  const handlePageChange = (page) => {
    fetchLaporants(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const response = await axiosUtil.get(
      `laporans/news?page=${page}&size=${newPerPage}`
    );
    if (response && response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    setData(response.data.data.laporans);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchLaporants(1);
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      progressComponent={<TableSkeletonCustom col={3} rows={5} />}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      customStyles={{
        headCells: {
          style: {
            fontWeight: 'bold',
            fontSize: '1rem',
          },
        },
        rows: {
          style: {
            fontSize: '0.8rem',
          },
        },
      }}
      responsive
    />
  );
}
