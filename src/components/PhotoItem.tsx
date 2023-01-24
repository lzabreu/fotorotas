import { Link } from "react-router-dom";
import { Photo } from "../types/Photo";


type PhotoProp = {
  data: Photo
}
export const PhotoItem = ({data}: PhotoProp) => {

  return (
    <div className='border p-2 m-2 text-xl cursor-pointer bg-slate-200 inline-block'>
      <Link to={`/photos/${data.id}`}>
        <img src={data.thumbnailUrl} alt={data.title} />
        <p>{data.id}</p>
      </Link>
    </div>
  )
}
