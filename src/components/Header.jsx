import React from 'react'

function Header() {
  return (
    <div className='px-7 pt-7 flex items-center justify-between'>
      <div>
        <p className='text-2xl font-bold'>Welcome back!</p>
        <p className='text-[#97979F]'>List of your tasks</p>
      </div>
      <div>
        <img src="https://avatars.githubusercontent.com/u/75907582?v=4" alt="userImage" width={35} className='rounded-full cursor-pointer' />
      </div>
    </div>
  )
}

export default Header;
