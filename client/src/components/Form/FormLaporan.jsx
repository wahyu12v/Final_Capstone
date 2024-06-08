import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';
import { toast } from 'sonner';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useEffect } from 'react';
import { laporanSchema } from '../../validations/laporan.validations';
import { createLaporan } from '../../actions/laporan.action';

export default function FormLaporan({ lat, lng }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      wa: '',
      lat: '',
      lng: '',
      kategori: '',
      deskripsi: '',
      foto: '',
    },
    validationSchema: laporanSchema,
    onSubmit: (values) => {
      submitFormLaporan(values);
    },
  });
  useEffect(() => {
    formik.setFieldValue('lat', lat);
    formik.setFieldValue('lng', lng);
  }, [lat, lng]);

  const {
    mutate: submitFormLaporan,
    isPending: formLaporanIsPending,
    isError: formLaporanIsError,
    error,
  } = createLaporan({
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success('Laporan berhasil dikirim');
        formik.resetForm();
      } else {
        toast.error('Laporan gagal dikirim');
      }
    },
  });

  if (formLaporanIsError) {
    if (error && error.response && error.response.status === 400) {
      toast.error('Laporan gagal dikirim');
    }
    if (error) toast.error('Gagal menghubungkan ke server');
  }

  const handleFormInput = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const handleFormInputFile = (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-name">Nama:</Form.Label>
        <Form.Control
          type="text"
          id="form-name"
          name="name"
          onChange={handleFormInput}
          value={formik.values.name}
          isInvalid={formik.touched.name && formik.errors.name}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
        <Form.Control
          type="text"
          name="lat"
          defaultValue={formik.values.lat}
          hidden
        />
        <Form.Control
          type="text"
          name="lng"
          defaultValue={formik.values.lng}
          hidden
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-email">Email:</Form.Label>
        <Form.Control
          type="email"
          id="form-email"
          name="email"
          onChange={handleFormInput}
          value={formik.values.email}
          isInvalid={formik.touched.email && formik.errors.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-wa">Whatsapp:</Form.Label>
        <Form.Control
          type="number"
          id="form-wa"
          name="wa"
          onChange={handleFormInput}
          value={formik.values.wa}
          isInvalid={formik.touched.wa && formik.errors.wa}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.wa}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-kategori">Kategori Tumpukan:</Form.Label>
        <Form.Select
          id="form-kategori"
          name="kategori"
          className="form-control"
          onChange={handleFormInput}
          value={formik.values.kategori}
          isInvalid={formik.touched.kategori && formik.errors.kategori}
          required
        >
          <option value="" hidden="">
            Pilih kategori{' '}
          </option>
          <option value="3">Parah</option>
          <option value="2">Sedang</option>
          <option value="1">Kecil</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.kategori}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-deskripsi">Deskripsi:</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          id="form-deskripsi"
          name="deskripsi"
          onChange={handleFormInput}
          value={formik.values.deskripsi}
          isInvalid={formik.touched.deskripsi && formik.errors.deskripsi}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.deskripsi}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label htmlFor="form-foto">Foto:</Form.Label>
        <Form.Control
          type="file"
          rows={4}
          id="form-foto"
          name="foto"
          accept="image/*"
          onChange={handleFormInputFile}
          isInvalid={formik.touched.foto && formik.errors.foto}
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.foto}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="header__btn">
        {formLaporanIsPending ? (
          <button
            type="submit"
            className="btn__landing"
            style={{ pointerEvents: 'none' }}
            disabled
          >
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />{' '}
            Mengirim...
          </button>
        ) : (
          <button type="submit" className="btn__landing">
            <RiSendPlaneFill /> Kirim laporan
          </button>
        )}
      </div>
    </form>
  );
}
