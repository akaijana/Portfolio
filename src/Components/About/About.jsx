import React from 'react'
import about_img from '../../assets/about_profile.svg'
import { infoList } from '../../assets/assets'
import profile_img from '../../assets/profile.jpeg'

const About = () => {
  return (
    <div id='about' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4
      
      className="text-center mb-2 text-lg ">Introduction</h4>
        <h1 className="text-center text-5xl ">About Me</h1>
        <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-10">
            <div className="w-64 sm:w-70 rounded-3xl max-w-none">
                <img src={profile_img} alt="" className="w-full rounded-3xl"  />
            </div>
            <div className="flex-1">

            <p className="mb-10 max-w-2xl ">
            Motivated Junior Front-End Developer with a strong foundation in
            JavaScript, HTML, CSS, and React.js, and hands-on experience
            building responsive user interfaces. Familiar with Next.js and
            modern front-end workflows.
          </p>

          <ul  className="grid gird-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {
                infoList.map(({icon,  title, description}, index)=>(
                    <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 shadow-2xl cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 hover:shadow ">
                        <img src={icon} alt={title} className="w-7 mt-3"/>
                        <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                        <p className="text-gray-800  text-sm">{description}</p>
                    </li>
                ))
            }
          </ul>
            </div>
        </div>
    </div>
  )
}

export default About