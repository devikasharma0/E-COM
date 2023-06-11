import React from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {IoCartOutline} from 'react-icons/io5'
function NavBar() {
  return (
    <>
    <nav>
        <div className='flex justify-between items-center mx-32 py-[3px] text-xs'>
            <ul className='flex gap-5'>
                <li>Hi!<a href="#"> Sign In</a> or <a href="#">Register</a></li>
                <li><a href="#">Daily Deals</a></li>
                <li><a href="#">Help & Contact</a></li>
            </ul>
            <ul className='flex gap-5'>
                <li className='flex items-center'><a href="#">Sell</a></li>
                <li className='flex items-center gap-1'><a href="#">Watchlist</a><FiChevronDown/></li>
                <li className='flex items-center gap-1'><a href="#">My eBay</a><FiChevronDown/></li>
                <li className='flex items-center text-2xl'><IoMdNotificationsOutline/></li>
                <li className='flex items-center text-2xl'><IoCartOutline/></li>
            </ul>
        </div>
        <hr />
    </nav>
    </>
  )
}

export default NavBar