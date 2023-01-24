import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
}) 

export const api = {
  getAlbumsList: async () => {
    let response = await request(`/albums`)
    let json = await response.data
    return json
  },
  getAlbum: async (id: string) => {
    let response = await request(`/albums/${id}`)
    let json = await response.data
    return json
  },
  getAlbumPhotos: async (id:string) => {
    let response = await request(`/albums/${id}/photos`)
    let json = await response.data
    return json
  },
  getPhoto: async (id: string) => {
    let response = await request(`/photos/${id}`)
    let json = await response.data
    
    return json
  }
}

