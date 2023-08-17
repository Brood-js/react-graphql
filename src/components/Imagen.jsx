import { useState, useEffect } from 'react'
import axios from 'axios'

const ImagenSearch = ({ countries }) => {
  const [imageResult, setImageResult] = useState([])

  useEffect(() => {
    async function fetchImages () {
      try {
        const promises = countries.map(async country => {
          const response = await axios.get(
            `https://pixabay.com/api/?key=38595367-5eeace6e3ecfe322a4d4b8d53&q=flag+${country}s&image_type=photo`
          )
          return response.data.webformatURL
        })
        const imageUrls = await Promise.all(promises)
        setImageResult(imageUrls)
      } catch (e) {
        console.log('Error fetching' + e)
      }
    }
    fetchImages()
  }, [countries])

  return (
    <div>
      <h2>Imagenes econtradas</h2>
      <div>
        {imageResult.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ImagenSearch
