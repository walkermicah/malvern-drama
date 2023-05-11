import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './components/RootLayout';
import Cast from './components/Cast';
import Crew from './components/Crew';
import Notes from './components/Notes';
import Error from './components/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/cast" element={<Cast />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/notes" element={<Notes />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
