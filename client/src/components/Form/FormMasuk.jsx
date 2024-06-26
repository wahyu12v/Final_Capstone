import { useFormik } from 'formik';
import { Form, Spinner } from 'react-bootstrap';
import { masukSchema } from '../../validations/masuk.validations';
import { actionMasuk } from '../../actions/masuk.action';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function FormMasuk() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: masukSchema,
    onSubmit: (values) => {
      submitFormMasuk(values);
    },
  });

  const { mutate: submitFormMasuk, isPending: formMasukIsPending } =
    actionMasuk({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data.data && data.data.token) {
            localStorage.setItem('token', data.data.token);
            toast.success('Masuk Berhasil');
            setTimeout(() => navigate('/dashboard'), 1000);
          }
        } else {
          toast.error('Nama pengguna atau Kata sandi Salah');
        }
      },
      onError: (error) => {
        if (error && error.response && error.response.status === 400) {
          return toast.error('Nama pengguna atau Kata sandi Salah');
        } else if (error && error.response) {
          return toast.error('Gagal menghubungkan ke server');
        } else {
          return toast.error('Gagal menghubungkan ke server');
        }
      },
    });
  const handleFormInput = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-group mb-3">
        <Form.Control
          type="text"
          id="username"
          name="username"
          onChange={handleFormInput}
          value={formik.values.username}
          isInvalid={formik.touched.username && formik.errors.username}
          placeholder="Nama Pengguna"
          required
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.username}
        </Form.Control.Feedback>
      </div>
      <div className="input-group mb-3">
        <Form.Control
          type="password"
          id="password"
          name="password"
          onChange={handleFormInput}
          value={formik.values.password}
          isInvalid={formik.touched.password && formik.errors.password}
          placeholder="Kata Sandi"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </div>
      <div className="input-group mb-3">
        {formMasukIsPending ? (
          <button
            type="submit"
            className="btn btn-lg btn-success w-100 fs-6"
            disabled
          >
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />{' '}
            Menunggu...
          </button>
        ) : (
          <button type="submit" className="btn btn-lg btn-success w-100 fs-6">
            Masuk
          </button>
        )}
      </div>
    </form>
  );
}
