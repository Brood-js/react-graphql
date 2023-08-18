import { useCountry } from '../hooks/useCountriesFilterCode'
import pruebaCard from '../assets/prueba_card.jpg'
import { useParams, Link } from 'react-router-dom'

export default function CountryPage () {
  const { id } = useParams()
  const { data, loading } = useCountry(id)
  const country = data?.country

  if (loading) return <div>Loading...</div>

  return (
    <div className='flex justify-center items-center bg-slate-300 h-screen'>
      <div className='flex flex-col w-[1050px] flex-wrap mt-10'>
        <img
          alt='Art'
          src={`https://flagcdn.com/w640/${id.toLowerCase()}.png`}
          className='h-64 w-full object-cover sm:h-80 lg:h-96 rounded-xl'
        />
        <div className='flex flex-col items-center justify-center'>
          <h4 className='mt-4 text-lg font-bold text-gray-900 sm:text-xl'>
            {country.name}
          </h4>
          <p className='mt-2 max-w-sm text-gray-700'>
            {country.continent.name}
          </p>
        </div>

        <div className='flex flex-col'>
          <h4 className='my-4 mx-4 text-lg font-bold text-gray-900 sm:text-xl'>
            Capital: {country.capital}
          </h4>
          <h4 className='my-4 mx-4 text-lg font-semibold text-gray-900 sm:text-xl'>
            <strong>Currency</strong> {country.currencies}
          </h4>
          <h4 className='my-4 mx-4 text-lg font-semibold text-gray-900 sm:text-xl'>
            <strong>Language:</strong>{' '}
            {country.languages.map(l => (
              <p key={l.code}>{l.name}</p>
            ))}
          </h4>
          <Link
            to={'/'}
            className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded flex justify-center items-center w-44'
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  )
}
