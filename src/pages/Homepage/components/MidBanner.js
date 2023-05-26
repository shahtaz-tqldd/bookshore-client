import React from 'react'
import {FaBook} from 'react-icons/fa'
import bookreading from '../../../assets/images/bookshelf.webp'

const MidBanner = () => {
    return (
        <div className="hero bg-[#567189] my-16 lg:py-24 md:py-12 py-8">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around text-white">
                <div>
                    <h2 className="text-2xl">What is</h2>
                    <h1 className="text-5xl font-bold mb-12">Bookshore about</h1>
                    <p className="py-2 flex items-center gap-2 text-xl"><FaBook className='text-2xl'/>Selling Books that you don't need Anymore</p>
                    <p className="py-2 flex items-center gap-2 text-xl"><FaBook className='text-2xl'/>Advertise your Books to Get More Attention</p>
                    <p className="py-2 flex items-center gap-2 text-xl"><FaBook className='text-2xl'/>Buying Old Books from Others</p>
                    <p className="py-2 flex items-center gap-2 text-xl"><FaBook className='text-2xl'/>Joinning with the Bookworm Community</p>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-3/4">
                    <img src={bookreading} alt="a book" className='lg:w-[90%] w-full' />
                </div>
            </div>
        </div>
    )
}

export default MidBanner