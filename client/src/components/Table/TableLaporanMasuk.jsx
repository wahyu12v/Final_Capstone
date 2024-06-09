import { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import axiosUtil from '../../utils/axios.utils';
import TableSkeletonCustom from '../Skeleton/TableSkeleton';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkDoneSharp,
  IoCheckmarkSharp,
  IoCloseCircleOutline,
  IoCloseSharp,
  IoEyeOutline,
  IoPaperPlane,
} from 'react-icons/io5';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'sonner';
import { updateLaporan } from '../../actions/laporan.action';
import { Link } from 'react-router-dom';

export default function TableLaporanMasuk() {
  const toastId = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchLaporants = async (page) => {
    setLoading(true);
    const response = await axiosUtil.get(
      `laporans/data-masuk?page=${page}&size=${perPage}`
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
      `laporans/data-masuk?page=${page}&size=${newPerPage}`
    );
    if (response && response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    setData(response.data.data.laporans);
    setPerPage(newPerPage);
    setLoading(false);
  };

  const { mutate: actionTerimaLaporan, isPending: terimaLaporanIsPending } =
    updateLaporan({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          toast.success('Laporan diterima', { id: toastId.current });
          fetchLaporants(1);
        } else {
          toast.error('Gagal menerima Laporan', { id: toastId.current });
        }
      },
      onError: () => {
        toast.error('Gagal menerima Laporan', { id: toastId.current });
      },
      onMutate: () => {
        toastId.current = toast.loading('Menunggu...');
      },
    });
  const { mutate: actionProsesLaporan, isPending: prosesLaporanIsPending } =
    updateLaporan({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          toast.success('Laporan diprosess', { id: toastId.current });
          fetchLaporants(1);
        } else {
          toast.error('Gagal memproses Laporan', { id: toastId.current });
        }
      },
      onError: () => {
        toast.error('Gagal memproses Laporan', { id: toastId.current });
      },
      onMutate: () => {
        toastId.current = toast.loading('Menunggu...');
      },
    });
  const { mutate: actionSelesaiLaporan, isPending: selesaiLaporanIsPending } =
    updateLaporan({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          toast.success('Laporan telah diselesaikan', { id: toastId.current });
          fetchLaporants(1);
        } else {
          toast.error('Gagal menyelesaikan Laporan', { id: toastId.current });
        }
      },
      onError: () => {
        toast.error('Gagal menyelesaikan Laporan', { id: toastId.current });
      },
      onMutate: () => {
        toastId.current = toast.loading('Menunggu...');
      },
    });
  const { mutate: actionTolakLaporan, isPending: tolakLaporanIsPending } =
    updateLaporan({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          toast.success('Laporan telah ditolak', { id: toastId.current });
          fetchLaporants(1);
        } else {
          toast.error('Gagal menolak Laporan', { id: toastId.current });
        }
      },
      onError: () => {
        toast.error('Gagal menolak Laporan', { id: toastId.current });
      },
      onMutate: () => {
        toastId.current = toast.loading('Menunggu...');
      },
    });

  const terimaLaporan = (id) => {
    confirmAlert({
      title: 'Terima Laporan',
      message: 'Apakah anda yakin ingin menerima laporan ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            actionTerimaLaporan({ id, body: { status: 1 } });
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  const prosessLaporan = (id) => {
    confirmAlert({
      title: 'Proses Laporan',
      message: 'Apakah anda yakin ingin memproses laporan ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            actionProsesLaporan({ id, body: { status: 2 } });
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  const selesaikanLaporan = (id) => {
    confirmAlert({
      title: 'Selesaikan Laporan',
      message: 'Apakah anda yakin ingin menyelesaikan laporan ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            actionSelesaiLaporan({ id, body: { status: 3 } });
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  const tolakLaporan = (id) => {
    confirmAlert({
      title: 'Tolak Laporan',
      message: 'Apakah anda yakin ingin menolak laporan ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            actionTolakLaporan({ id, body: { status: 4 } });
          },
        },
        {
          label: 'Tidak',
          onClick: () => {},
        },
      ],
    });
  };

  const columns = [
    {
      name: 'Nama Pelapor',
      selector: (row) => row.pelapor.namaPelapor,
    },
    {
      name: 'Email Pelapor',
      selector: (row) => row.pelapor.emailPelapor,
    },
    {
      name: 'Whatsapp Pelapor',
      selector: (row) => row.pelapor.nomorPelapor,
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
        >
          {row.kategoriSampah === 1
            ? 'Kecil'
            : row.kategoriSampah === 2
            ? 'Sedang'
            : 'Parah'}
        </Badge>
      ),
    },

    {
      name: 'Status',
      cell: (row) => (
        <Badge
          pill
          bg={
            row.status === 1
              ? 'success'
              : row.status === 2
              ? 'info'
              : row.status === 3
              ? 'primary'
              : row.status === 4
              ? 'danger'
              : 'warning'
          }
          text="dark"
          className="text-white"
        >
          {row.status === 1
            ? 'Diterima'
            : row.status === 2
            ? 'Diproses'
            : row.status === 3
            ? 'Selesai'
            : row.status === 4
            ? 'Ditolak'
            : 'Menunggu'}
        </Badge>
      ),
    },
    {
      name: 'Aksi',
      cell: (row) => (
        <>
          {row.status !== 3 && row.status !== 4 && (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  {row.status === 0
                    ? 'Terima Laporan'
                    : row.status === 1
                    ? 'Proses Laporan'
                    : 'Selesaikan Laporan'}
                </Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <a
                  className={'text-success mx-0'}
                  style={{ cursor: 'pointer' }}
                  {...triggerHandler}
                  onClick={() =>
                    row.status === 0
                      ? terimaLaporan(row.laporanId)
                      : row.status === 1
                      ? prosessLaporan(row.laporanId)
                      : selesaikanLaporan(row.laporanId)
                  }
                  ref={ref}
                >
                  {row.status === 0 ? (
                    <IoCheckmarkCircleOutline size={28} />
                  ) : row.status === 1 ? (
                    <IoPaperPlane size={28} />
                  ) : (
                    <IoCheckmarkDoneSharp size={28} />
                  )}
                </a>
              )}
            </OverlayTrigger>
          )}
          {row.status !== 3 && row.status !== 4 && (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Tolak Laporan</Tooltip>}
            >
              {({ ref, ...triggerHandler }) => (
                <a
                  className={'text-danger mx-2 px-0'}
                  style={{ cursor: 'pointer' }}
                  onClick={() => tolakLaporan(row.laporanId)}
                  {...triggerHandler}
                  ref={ref}
                >
                  <IoCloseCircleOutline size={28} />
                </a>
              )}
            </OverlayTrigger>
          )}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Lihat Laporan</Tooltip>}
          >
            {({ ref, ...triggerHandler }) => (
              <Link
                to={`/dashboard/laporan/${row.laporanId}`}
                className={'text-primary mx-0 px-0'}
                style={{ cursor: 'pointer' }}
                {...triggerHandler}
                ref={ref}
              >
                <IoEyeOutline size={28} />
              </Link>
            )}
          </OverlayTrigger>
        </>
      ),
    },
  ];

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
      progressComponent={<TableSkeletonCustom col={6} rows={5} />}
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
            textAlign: 'center',
          },
        },
      }}
      responsive
    />
  );
}
