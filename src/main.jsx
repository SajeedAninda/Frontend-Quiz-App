import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Html from './Components/QuizPages/Html.jsx';
import Css from './Components/QuizPages/Css.jsx';
import Javascript from './Components/QuizPages/Javascript.jsx';
import Accessibility from './Components/QuizPages/Accessibility.jsx';
import { ThemeProvider } from './Custom Hooks/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/HTML",
    element: <Html></Html>,
  },
  {
    path: "/CSS",
    element: <Html></Html>,
  },
  {
    path: "/JavaScript",
    element: <Html></Html>,
  },
  {
    path: "/Accessibility",
    element: <Html></Html>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>,
)
