import React, { useState } from 'react'
import { FiAlignJustify, FiNavigation } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const views = [
    { name: 'Home', link: '/', icon: AiOutlineHome },
    { name: 'Vista 1', link: '/view-1', icon: AiOutlineDashboard },
    { name: 'Vista 2', link: '/view-2', icon: FiNavigation }
  ]

  const [open, setOpen] = useState(true)
  const handleClick = () => setOpen(!open)

  return (
    <div
      className={`bg-indigo-600 h-full ${
        open ? 'w-72' : 'w-16'
      } duration-500 text-white px-4`}
    >
      <div className='py-3 flex justify-between items-center'>
        <h3
          className={`whitespace-pre duration-500 ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        >
          Logo
        </h3>
        <FiAlignJustify
          size={25}
          className={`cursor-pointer ${
            !open && 'duration-500 ease-in-out absolute '
          }`}
          onClick={handleClick}
        />
      </div>
      <div className='mt-4 flex flex-col gap-4 relative'>
        {views?.map((view, index) => (
          <Link
            to={view?.link}
            key={`index-key-${index}`}
            className='flex items-center text-m gap-3.5 font-semibold p-2 hover:bg-indigo-400 rounded-md '
          >
            <div>{React.createElement(view?.icon, { size: '20' })}</div>
            <h3
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {view?.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
