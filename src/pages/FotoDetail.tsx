import { Photo as PhotoType} from "../types/Photo";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../apis/api";
import { PhotoItem } from "../components/PhotoItem";

export const FotoDetail = () => {
  
  const params = useParams()
  const navigate = useNavigate()

  const [photoInfo, setPhotoInfo] = useState<PhotoType>()

  useEffect(() => {
    if(params.id){
      loadPhoto(params.id)
    }
  },[]);

  const loadPhoto = async (id: string) => {
    let photo = await api.getPhoto(id)
    setPhotoInfo(photo)
  }
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div>
      {photoInfo &&
        <>
          <button onClick={handleBack} className='flex m-4 border-2 p-4 rounded bg-slate-300 w-20 text-center justify-center'>Voltar</button>
          <p className="ml-3 text-3xl">{photoInfo.title}</p>
          <br />
          <img src={photoInfo.url} alt={photoInfo.title} className='w-60 h-60 m-4 border-2 border-blue-400'/>
        </>
      } 
    </div>  
  )
}

