import React from 'react'
import { serviceData } from '../../assets/assets'
import { ArrowRight } from 'lucide-react'

const Services = () => {
    return (
        <div id='services' className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg ">
                What I Offer
            </h4>

            <h2 className="text-center text-5xl">
                My Services
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I’m a frontend web developer with hands-on experience building multiple web projects. I focus on creating clean, responsive, and user-friendly interfaces that deliver engaging and intuitive user experiences.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceData.map(({icon, title, description, link}, index)=>(
                    <div key={index}  className='border border-gray-500 shadow-lg  rounded-lg px-8 py-12 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500'>
                        <img alt='' src={icon} className='w-20'/>
                    <h3 className='text-lg my-4 ' >{title}</h3>
                    <p className='text-sm  leading-5' >{description}</p>
                    <a className='flex items-center gap-2 text-sm mt-5' href={link}>Read more <ArrowRight size={15} className='w-4 mt-1' /> </a>

                    </div>
                    
                ))}

            </div>


        </div>
    )
}

export default Services