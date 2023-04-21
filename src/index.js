import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { List } from './pages/List';
import { Search } from './pages/Search';
import { ArtistDetail } from './pages/ArtistDetail';
import { Context } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: "/",
    element: <App/> },
  { path: "list",
    element: <List/> },
  { path: "search",
    element: <Search/> },
  { path: "artist-detail/:id",
    element: <ArtistDetail/>}
      
]);

root.render(
  <React.StrictMode>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
);




