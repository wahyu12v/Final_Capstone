import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Laporan from '../pages/laporan/Laporan';

export const router = createBrowserRouter([
  {
    path: '/lapor',
    element: <Laporan />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
