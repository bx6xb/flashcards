import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { DecksPage } from './pages/decksPage/decks.page'
import { store } from './services/store'
import { SignIn } from './components/auth/signIn'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DecksPage />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = store.getState().app.isUserAuthorized

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
