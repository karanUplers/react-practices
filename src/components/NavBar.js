import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='bg-gray-200 py-4 sticky top-0 w-full z-20 top-0'>
        <div className="container mx-auto px-10">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-black mb-2">
                    <Link to="/"><span className='text-sky-500'>Blog</span>ger</Link>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li><Link to="/" className='font-medium hover:text-sky-500 cursor-pointer transition-all'>Home</Link></li>
                          <li><Link to="/blogs" className='font-medium hover:text-sky-500 cursor-pointer transition-all'>Blogs</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
