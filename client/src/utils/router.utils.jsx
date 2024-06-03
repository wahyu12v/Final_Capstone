import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import '../index.css';
import Home from '../pages/home/Home';
import Laporan from '../pages/laporan/Laporan';
import Masuk from '../pages/masuk/Masuk';
import { Toaster } from 'sonner';
import * as React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Notfound from '../pages/notfound/Notfound';

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    path: '/lapor',
    element: (
      <QueryClientProvider client={queryClient}>
        <PerfectScrollbar component="div">
          <Toaster richColors position="top-center" duration={4000} />
          <Laporan />
        </PerfectScrollbar>
      </QueryClientProvider>
    ),
  },
  {
    path: '/masuk',
    element: (
      <PerfectScrollbar>
        <Masuk />
      </PerfectScrollbar>
    ),
  },
  {
    path: '/',
    element: (
      <PerfectScrollbar>
        <Home />
      </PerfectScrollbar>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/not-found" replace></Navigate>,
  },
  {
    path: '/not-found',
    element: <Notfound />,
  },
  {
    path: '/forbidden',
    element: <div>HELLO WORLD</div>,
  },
]);
