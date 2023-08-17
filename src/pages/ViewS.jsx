import SideBar from '../components/SideBar'

const ViewS = () => {
  return (
    <div className='flex gap-6 h-screen'>
      <SideBar />
      <div className='m-3 text-gray-600 font-semibold text-3xl'>
        Hola desde la Vista 2!
      </div>
    </div>
  )
}

export default ViewS
