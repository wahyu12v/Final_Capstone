import { useFormik } from 'formik';
import { Button, Form, Spinner } from 'react-bootstrap';
import { pengaturanSchema } from '../../validations/pengaturan.validation';
import { actionPengaturan } from '../../actions/pengaturan.action';
import { toast } from 'sonner';

export default function FormPengaturan() {
  const formik = useFormik({
    initialValues: {
      passwordLama: '',
      passwordBaru: '',
      passwordBaruKonfirmasi: '',
    },
    validationSchema: pengaturanSchema,
    onSubmit: (values) => {
      submitFormPengaturan(values);
    },
  });

  const { mutate: submitFormPengaturan, isPending: formPengaturanIsPending } =
    actionPengaturan({
      onSuccess: (data) => {
        if (data.status === 200) {
          if (data && data.token) {
            localStorage.setItem('token', data.data.token);
            toast.success('Kata sandi berhasil diubah');
          }
          toast.success('Kata sandi berhasil diubah');
          formik.resetForm();
        } else {
          toast.error('Kata sandi lama tidak sesuai');
        }
      },
      onError: (error) => {
        if (error && error.response && error.response.status === 401) {
          return toast.error('Kata sandi lama tidak sesuai');
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
    <div className="row d-flex justify-content-center">
      <div className="col-lg-6">
        <Form style={{ textAlign: 'left' }} onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: '0.9rem' }}>
              Kata Sandi Lama
            </Form.Label>
            <Form.Control
              type="password"
              name="passwordLama"
              id="passwordLama"
              onChange={handleFormInput}
              value={formik.values.passwordLama}
              isInvalid={
                formik.touched.passwordLama && formik.errors.passwordLama
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.passwordLama}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: '0.9rem' }}>
              Kata Sandi Baru
            </Form.Label>
            <Form.Control
              type="password"
              name="passwordBaru"
              id="passwordBaru"
              onChange={handleFormInput}
              value={formik.values.passwordBaru}
              isInvalid={
                formik.touched.passwordBaru && formik.errors.passwordBaru
              }
              required
            />
            <small class="text-dark">
              Minimal 8 karakter dan mengandung kombinasi huruf kecil, huruf
              besar, angka dan simbol
            </small>
            <Form.Control.Feedback type="invalid">
              {formik.errors.passwordBaru}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: '0.9rem' }}>
              Konfirmasi Kata Sandi Baru
            </Form.Label>
            <Form.Control
              type="password"
              name="passwordBaruKonfirmasi"
              id="passwordBaruKonfirmasi"
              onChange={handleFormInput}
              value={formik.values.passwordBaruKonfirmasi}
              isInvalid={
                formik.touched.passwordBaruKonfirmasi &&
                formik.errors.passwordBaruKonfirmasi
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.passwordBaruKonfirmasi}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="row">
            <div className="col d-flex justify-content-end">
              {formPengaturanIsPending ? (
                <Button type="submit" className="btn btn-success" disabled>
                  <Spinner as="span" animation="grow" size="sm" role="status" />
                  Mengubah...
                </Button>
              ) : (
                <Button type="submit" className="btn btn-success">
                  Ubah Kata Sandi
                </Button>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
