import { AlbumItem } from "../components/AlbumItem";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../apis/api";
import { Album } from "../types/Album";


export const Home = () => {
  const [albumsList, setAlbumsList] = useState<Album[]>([])

  useEffect(() => {
    loadAlbumsList()
  },[]);

  const loadAlbumsList = async () => {
    let json = await api.getAlbumsList()
    setAlbumsList(json)
  }
  return (
    <div>
       {albumsList.map((album, index) => ( 
         <AlbumItem key={index} id={album.id} title={album.title} />
      ))}
    </div>   
  )
}
