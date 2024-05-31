import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { laporanSchema } from '../../validations/laporan.validations';
import { createLaporan } from '../../actions/laporan.action';
import { Spinner } from 'react-bootstrap';
import { toast } from 'sonner';

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

  const { mutate: submitFormLaporan, isPending: formLaporanIsPending } =
    createLaporan({
      onSuccess: (data) => {
        if (data.status === 200) {
          toast.success('Laporan berhasil dikirim');
          formik.setFieldValue('name', '');
          formik.setFieldValue('email', '');
          formik.setFieldValue('wa', '');
          formik.setFieldValue('kategori', '');
          formik.setFieldValue('deskripsi', '');
          formik.setFieldValue('foto', '');
        } else {
          toast.error('Laporan gagal dikirim');
        }
      },
    });

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
        <Form.Control type="text" name="lat" defaultValue={lat} hidden />
        <Form.Control type="text" name="lng" defaultValue={lng} hidden />
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
          <button type="submit" className="btn btn-primary">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Mengirim...
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
