import { Link } from "react-router-dom";
import { Album } from "../types/Album";

export const AlbumItem = ({id, title}: Album) => {

  return (
    <div className='border p-2 m-2 text-xl cursor-pointer bg-slate-200'>
     <Link to={`/album/${id}`}>{title}</Link>
    </div>
  )
}
