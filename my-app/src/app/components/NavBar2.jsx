import React from 'react'
import {FiChevronDown,FiSearch} from 'react-icons/fi'
function NavBar2() {
  return (
    <>
    <div className='flex justify-center items-center gap-3 py-4'>
        <div className='flex items-center'>
            <p className='w-[80px] text-sm'>Shop by Category</p>
            <FiChevronDown/>
        </div>
        <div className='border-2 border-gray-500 w-[800px] relative pl-10  flex items-center justify-between'>
            <FiSearch className='text-xl absolute top-2 left-2'/>
            <input type="text" placeholder='Search for anything' className=''/>
            <div className='flex items-center border-2 border-gray-500 py-[7px] gap-5 px-3'>
                <p className='text-xs'>All Categories</p>
                <FiChevronDown/>
            </div>
        </div>
        <button className='bg-[#3665f3] text-white py-2 px-14'>Search</button>
        <p className='text-xs'>Advanced</p>
    </div>
    <hr />
    </>
  )
}

export default NavBar2