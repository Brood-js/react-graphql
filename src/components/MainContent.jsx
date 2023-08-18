import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Country from './Country'
import { gql, useQuery } from '@apollo/client'
import CountryCardSearch from './CountryCardSearch'

const COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`

const MainContent = () => {
  const [search, setSearch] = useState(null)

  const { data, loading } = useQuery(COUNTRIES)

  const datos = data?.countries

  const filterCountry = () => {
    return search != null && search.length > 0
      ? datos.filter(c => {
          return c.name.toLowerCase().includes(search.toLowerCase())
        })
      : datos
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = event => {
    setSearch(event.target.value)
  }

  return (
    <>
      <h2 className='m-5 text-gray-600 font-semibold text-3xl'>
        Buscador de Paises
      </h2>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-11/12 md:w-8/12 xl:w-1/2 h-auto p-5 rounded-3xl ring-2 ring-slate-500'>
          <form
            className='w-full h-5 flex items-center'
            onSubmit={handleSubmit}
          >
            <AiOutlineSearch className='w-10 h-full' />
            <input
              onChange={handleChange}
              type='text'
              name='search'
              placeholder='Peru, Japan, Argentina...'
              className='w-full h-full font-medium md:pl-2 focus:outline-none'
            />
            <button className='w-28 h-full flex justify-center items-center rounded-2xl bg-slate-700 text-white font-medium py-4'>
              Buscar
            </button>
          </form>
        </div>
      </div>
      <CountryCardSearch />
      {loading ? <p>Loading...</p> : <Country country={filterCountry()} />}
    </>
  )
}

export default MainContent
