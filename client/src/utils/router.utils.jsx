import Home from '../pages/home/Home';
import Laporan from '../pages/laporan/Laporan';
import Masuk from '../pages/masuk/Masuk';
import { Toaster } from 'sonner';
import * as React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Notfound from '../pages/notfound/Notfound';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardLaporan from '../pages/dashboard/laporan/Laporan';
import Forbidden from '../pages/forbidden/Forbidden';
import imgMeta from '../assets/logo/12.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import '../index.css';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import 'react-loading-skeleton/dist/skeleton.css';
import DetailLaporan from '../pages/dashboard/laporan/DetailLaporan';
import { Helmet } from 'react-helmet-async';

const queryClient = new QueryClient();
export const router = createBrowserRouter([
  {
    path: '/lapor',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Helmet>
          <title>Laporan | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Laporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Helmet>
          <title>Dashboard | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Dashboard />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard/laporan',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Helmet>
          <title>Daftar Laporan | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <DashboardLaporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard/laporan/:id',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Helmet>
          <title>Detail Laporan | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <DetailLaporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/masuk',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Helmet>
          <title>Masuk | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Masuk />
      </QueryClientProvider>
    ),
  },
  {
    path: '/',
    element: (
      <>
        <Helmet>
          <title>Beranda | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Home />
      </>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/not-found" replace></Navigate>,
  },
  {
    path: '/not-found',
    element: (
      <>
        <Helmet>
          <title>Tidak Ditemukan | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Notfound />
      </>
    ),
  },
  {
    path: '/forbidden',
    element: (
      <>
        <Helmet>
          <title>Tidak Di izinkan | PANTAS - Pelaporan Aduan Tumpukan Sampah</title>
          <meta property="og:image" content={imgMeta}/>
          <meta property="twitter:image" content={imgMeta}/>
        </Helmet>
        <Forbidden />
      </>
    ),
  },
]);
