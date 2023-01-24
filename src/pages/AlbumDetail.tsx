import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../apis/api";
import { Photo } from "../types/Photo";
import { Album as AlbumType} from "../types/Album";
import { PhotoItem } from "../components/PhotoItem";

export const AlbumDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [photosList, setPhotosList] = useState<Photo[]>([])
  const [albumInfo, setAlbumInfo] = useState<AlbumType>({id:0, title:'', userID:0})

  useEffect(() => {
    if(params.id){
      loadPhotosList(params.id)
      loadAlbumInfo(params.id)
    }
  },[]);

  const loadPhotosList = async (id: string) => {
    let photos = await api.getAlbumPhotos(id)
    setPhotosList(photos)
  }

  const loadAlbumInfo = async (id: string) => {
    let albumInfo = await api.getAlbum(id)
    setAlbumInfo(albumInfo)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="block">
      <button onClick={handleBack} className='flex m-4 border-2 p-4 rounded bg-slate-300 w-20 text-center justify-center'>Voltar</button>
      <h1 className="ml-3 text-3xl">{albumInfo.title}</h1>
      <br />
      {photosList.map((photos, index) =>
        <PhotoItem key={index} data={photos} />
      )}
       
    </div>   
  )
}
