import { useState } from 'react'
import { useCountryCont } from '../hooks/useCountriesFilterCont'

const CountryCardSearch = () => {
  const [continents, setContinents] = useState([])
  const { data, loading } = useCountryCont(continents)
  const countries = data?.countries

  const handleValueClick = ([value]) => {
    if (value != 'reset') {
      setContinents(select => [...select, value])
    } else {
      setContinents([])
    }
  }

  if (loading) return <p>Loanding...</p>

  return (
    <div className='w-full'>
      <div className='flex flex-wrap justify-between my-5 gap-2'>
        <button
          onClick={() => handleValueClick(['SA'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Sur America
        </button>
        <button
          onClick={() => handleValueClick(['NA'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Norte America
        </button>
        <button
          onClick={() => handleValueClick(['EU'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Europa
        </button>
        <button
          onClick={() => handleValueClick(['AS'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Asia
        </button>
        <button
          onClick={() => handleValueClick(['OC'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Oceania
        </button>
        <button
          onClick={() => handleValueClick(['AF'])}
          className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Africa
        </button>
        <button
          onClick={() => setContinents([])}
          className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]'
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}

export default CountryCardSearch
