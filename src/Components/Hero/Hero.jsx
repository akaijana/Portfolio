import React from 'react'
import profile_image from '../../assets/profile_img.svg'
import profile from '../../assets/profile1.jpeg'
import { ArrowDown, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div  className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profile} alt="Profile" className="rounded-full w-38" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono">Hello! I'm Sakar</h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-mono">Frontend developer based in Nepal</h1>
      <p className="max-w-2xl mx-auto font-sans">I’m a frontend web developer experienced in building scalable web applications using modern frontend technologies, with a strong focus on performance, accessibility, and user experience.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='cursor-pointer px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 transition-transform duration-500 hover:scale-105'>Contact Me<ArrowRight size={20} /></a>
        <a href='/Sakar_Pokhrel.pdf' download className='cursor-pointer px-10 py-3 border rounded-full border-black bg-white text-black flex items-center gap-2 transition-transform duration-500 hover:scale-105'>Resume<ArrowDown size={20} /></a>
      </div>
    </div>
  )
}

export default Hero