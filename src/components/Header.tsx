'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, {useState} from 'react'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className='bg-[#183a995e]'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ' aria-label='Global'>
            <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Booking.com</span>
            <img className='h-12 w-auto' src = 'https://oneticketjustgo.com/wp-content/uploads/2019/10/logo-booking-com-png-booking-com-1020.png' alt='booking logo'/>
            </Link>
            </div>
           <div className='flex lg:hidden'>
<button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
onClick={()=> setMobileOpen(true)}>
    <span className='sr-only'>
Open main menu
    </span>
    <Bars3Icon className='h-6 w-6' aria-label='true' />
</button>
           </div>

        </nav>
    </header>
  )
}

export default Header