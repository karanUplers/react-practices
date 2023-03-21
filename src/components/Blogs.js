import React from 'react'
import { Link } from 'react-router-dom';
import useFetchData from '../useFetchData'

export const Blogs = () => {

    const [data, loading] = useFetchData(true)
    const location = window.location;
    console.log(data)

    return (
        <div className='py-10 pt-0 overflow-y-auto max-h-full'>
            <div className="container px-10 mx-auto">
                <div className="border-b pb-7 pt-10 sticky top-0 bg-white z-50">
                    <h1 className='text-3xl font-bold mb-2'>Blogs</h1>
                    <span className='text-sm text-gray-500 font-medium'>{data && `Total User's : ${data.length}`}</span>
                </div>
                <div className="relative flex flex-wrap py-8 -mx-3">
                    {loading && <div className="tracking-wide w-full h-full absolute left-0 top-0 flex items-center justify-center text-sm font-medium text-sky-500">Loading...</div>}
                    {data && data.map(elm => (

                        <div key={elm.id} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4  px-3 mb-6 '>
                            <Link to={`${location.href +"/"+elm.id}`}>
                                <div className="relative overflow-hidden bg-gray-100 p-5 rounded-lg border border-gray-100 cursor-pointer hover:shadow-lg hover:border-gray-200 transition-all">
                                    <span className='absolute z-0 tracking-tighter font-bold text-9xl top-1/2 right-0 -translate-y-1/2 pointer-events-none text-sky-200'>{elm.id}</span>
                                    <h3 className='text-lg font-medium z-10 relative'>{elm.name}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
