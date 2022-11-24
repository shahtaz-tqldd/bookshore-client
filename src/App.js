import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './router/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
