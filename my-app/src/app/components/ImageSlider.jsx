import Image from 'next/image'
import React from 'react'
import{TfiArrowCircleLeft, TfiArrowCircleRight} from 'react-icons/tfi'
import{MdOutlineDoubleArrow} from 'react-icons/md'

function ImageSlider() {
  return (
    <>
    <div className='grid place-items-center'>
        <Image src = "/Images/ecom.png" alt='ecom' width={1400} height={600} className='border-2 border-gray-800'/>
        <div className='absolute top-1/2 left-8 rounded-full bg-slate-200 p-2'>
            <TfiArrowCircleLeft/>
        </div>
        <div className='absolute top-1/2 right-8 rounded-full bg-slate-200 p-2'>
            <TfiArrowCircleRight/>
        </div>

    </div>
    <div className='flex justify-between mx-48 my-20 bg- py-7 px-10 rounded-md bg-[#0E2954]'>
        <div>
            <h1 className='text-3xl text-white '>Deals of the day</h1>
            <p className='text-sm text-white'>Check out deals on top brands!</p>
        </div>
        <div className='hover:bg-white w-36 border border-white flex items-center justify-start text-white hover:text-[#0E2954] hover:child:translate-x-20 '>
            <button className='text-5xl transition duration-500'><MdOutlineDoubleArrow/></button>
        </div>
    </div>
    </>
  )
}

export default ImageSlider