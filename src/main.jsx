import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const WorkPage = lazy(() => import('./pages/WorkPage.jsx'))
const EducationPage = lazy(() => import('./pages/EducationPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const RecommendationsPage = lazy(() => import('./pages/RecommendationsPage.jsx'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Suspense><HomePage /></Suspense> },
      { path: 'projects', element: <Suspense><ProjectsPage /></Suspense> },
      { path: 'projects/:slug', element: <Suspense><ProjectDetailPage /></Suspense> },
      { path: 'work', element: <Suspense><WorkPage /></Suspense> },
      { path: 'education', element: <Suspense><EducationPage /></Suspense> },
      { path: 'about', element: <Suspense><AboutPage /></Suspense> },
      { path: 'recommendations', element: <Suspense><RecommendationsPage /></Suspense> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
