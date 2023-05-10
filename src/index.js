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
import Home from './pages/Home';
import App from './components/App';
import { store } from './redux/store';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<App />}>
      <Route index element={<Navigate to={'/1'} />} />
      <Route path="/:pageId" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<NotFound />} />,
  </Provider>,
);
