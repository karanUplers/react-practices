import React from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../useFetchData'

export const UserSingle = (props) => {
    const [data, loading] = useFetchData(false, "/users");

    console.log(props.test)
    return (
        <div className='py-10 relative h-screen overflow-hidden'>
            {data && <span className='absolute pointer-events-none top-0 right-0 font-bold text-[20em] md:text-[50em] leading-[.6em] lg:leading-none z-0 text-sky-100 tracking-tighter'>{data.id}</span>}
            <div className="container px-10 mx-auto relative z-10">
                <div className="pb-7">
                    {/* <h1 className='text-3xl font-bold mb-2'>user Single</h1> */}
                    <Link to="/users" className='text-sky-500'> {`< Back to Users`} </Link>
                </div>
                <div className="relative space-y-2 py-8">
                    {loading && <div className="tracking-wide w-full h-full absolute left-0 top-0 flex items-center justify-center text-sm font-medium text-sky-500">Loading...</div>}
                    <h2 className='block text-2xl font-medium text-sky-500 mb-4'>{data && data.name}</h2>
                    <div className='text-sm'>{data && <><span className='text-gray-500 font-medium'>Email</span> : {data.email}</>}</div>
                    <div className='text-sm'>{data && <><span className='text-gray-500 font-medium'>Phone</span> : {data.phone}</>}</div>
                </div>
            </div>
        </div>
    )
}
