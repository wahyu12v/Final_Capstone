import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import { router } from './utils/router.utils';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'sonner';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <RouterProvider router={router}>
      <Toaster position="top-center" />
    </RouterProvider>
  );
}
