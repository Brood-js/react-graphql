import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <>
      <h2 className='m-3 text-gray-600 font-semibold text-xl'>
        Buscador de Paises
      </h2>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-11/12 md:w-8/12 xl:w-1/2 h-auto p-5 rounded-3xl ring-2 ring-slate-500'>
          <form className='w-full h-5 flex items-center'>
            <AiOutlineSearch className='w-10 h-full' />
            <input
              type='text'
              placeholder='Peru, Japan, Argentina...'
              className='w-full h-full font-medium md:pl-2 focus:outline-none'
            />
            <button className='w-28 h-full flex justify-center items-center rounded-2xl bg-slate-700 text-white font-medium py-4'>
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchBar
