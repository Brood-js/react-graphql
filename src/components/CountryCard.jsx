import pruebaCard from '../assets/prueba_card.jpg'
import { useFetch } from '../hooks/useFetch'

const CountryCard = ({ country }) => {
  if (country === null) {
    return null
  }

  return (
    <div className='container mx-auto py-28 px-8'>
      <div className='grid lg:grid-cols-3 gap-6'>
        {country.map(c => (
          <div key={c.code} className='shadow-2xl rounded-xl'>
            <img src={pruebaCard} alt='prueba' className='rounded-t-lg' />
            <div className='p-5'>
              <h3 className='text-xl font-bold text-slate-700 mb-3'>
                {c.name}
              </h3>
              <p className='text-lg font-normal text-gray-600'>
                {c.continent.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountryCard
