import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Blog from './pages/Blog';
import Vendors from './pages/Vendors';
import Venues from './pages/Venues';
import Home from './pages';
import RootLayout from './components/Layout';
import ErrorComponent from './components/Error';

function App() {
  //Routing definations
  const Router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorComponent />,
      element: <RootLayout />,
      children: [
        {
          path: '',
          // index: true,
          element: <Home />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/venues',
          element: <Venues />,
        },
        {
          path: '/vendors',
          element: <Vendors />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
