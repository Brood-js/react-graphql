import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <>
      <div className='flex gap-6'>
        <header>
          <SideBar />
        </header>
        <main className='w-full'>
          <MainContent />
        </main>
      </div>
    </>
  )
}

export default Home
