import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { store } from './redux/store';

import './index.css';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<App />}>
        <Route index element={<Navigate to={'/1'} />} />
        <Route path="/:pageId" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>,
  ),
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<NotFound />} />,
  </Provider>,
);
