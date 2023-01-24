import { useRoutes } from "react-router-dom"
import { Home } from "../pages/Home"
import { AlbumDetail } from "../pages/AlbumDetail"
import { FotoDetail } from "../pages/FotoDetail"
import  NotFound  from "../pages/NotFound"

export const RouteList = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/album/:id', element: <AlbumDetail /> },
    { path: '/photos/:id', element: <FotoDetail /> },
    { path: '*', element: <NotFound /> }
  ])
}