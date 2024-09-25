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
    path: "/html",
    element: <Html></Html>,
  },
  {
    path: "/css",
    element: <Css></Css>,
  },
  {
    path: "/javascript",
    element: <Javascript></Javascript>,
  },
  {
    path: "/accessibility",
    element: <Accessibility></Accessibility>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>,
)
