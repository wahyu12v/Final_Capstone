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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import '../index.css';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import 'react-loading-skeleton/dist/skeleton.css';
import DetailLaporan from '../pages/dashboard/laporan/DetailLaporan';

const queryClient = new QueryClient();
export const router = createBrowserRouter([
  {
    path: '/lapor',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Laporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Dashboard />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard/laporan',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <DashboardLaporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/dashboard/laporan/:id',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <DetailLaporan />
      </QueryClientProvider>
    ),
  },
  {
    path: '/masuk',
    element: (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" duration={4000} />
        <Masuk />
      </QueryClientProvider>
    ),
  },
  {
    path: '/',
    element: <Home />,
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
    element: <Forbidden />,
  },
]);
