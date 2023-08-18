import pruebaCard from '../assets/prueba_card.jpg'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
  return (
    <div className='container mx-auto py-28 px-8'>
      <div className='grid lg:grid-cols-3 gap-6'>
        {country.map(c => (
          <Link
            to={`/${c.code}`}
            key={c.code}
            className='shadow-2xl rounded-xl'
          >
            <img
              src={`https://flagcdn.com/w640/${c.code.toLowerCase()}.png`}
              alt='prueba'
              className='rounded-t-lg'
            />
            <div className='p-5'>
              <h3 className='text-xl font-bold text-slate-700 mb-3'>
                {c.name}
              </h3>
              <p className='text-lg font-normal text-gray-600'>
                {c.continent.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Country
