import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import CountryCard from '../components/CountryCard'
import { gql, useQuery } from '@apollo/client'
import ImagenSearch from '../components/Imagen'

const COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      continent {
        code
        name
      }
      languages {
        name
      }
      currency
      states {
        name
      }
    }
  }
`
const API_KEY = '38595367-5eeace6e3ecfe322a4d4b8d53'

const Home = () => {
  const { data, loading } = useQuery(COUNTRIES)
  const countries = data?.countries.map(country => country.name)

  return (
    <>
      <div className='flex gap-6'>
        <header>
          <SideBar />
        </header>
        <main className='w-full'>
          <SearchBar />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <CountryCard country={data?.countries} />
          )}
          {/* <Imagen countries={countries} /> */}

          {/* <h1 className='font-bold'>GraphQL + React</h1> */}
        </main>
      </div>
    </>
  )
}

export default Home
