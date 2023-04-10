import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './components/RootLayout';
import Error from './components/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
      </Route>
    </>
  ),
  { basename: '/malvern-drama' }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
