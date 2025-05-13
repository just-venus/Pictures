import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ImageList from './components/ImageList.jsx'
import searchImages from './api'

function App() {
  //searchImages('cars')
  const[images, setImages] = useState([])

  const handleSubmit = async(term) =>{
    console.log('Usted esta buscando con: ', term)
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <>
    <h1>Pictures App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App