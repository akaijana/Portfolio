import React from 'react'
import mail from '../../assets/mail_icon.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linked.webp'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
         <a href="" className="w-28 mx-auto  mb-2 cursor-pointer mr-14 text-3xl">
          Sakar
        </a>

        <div className='flex mt-2 items-center gap-2 justify-center flex-col sm:flex-row sm:gap-6' >

        <div className=" flex items-center gap-2" >
            <img alt="" src={mail} className="w-6" />
            sakarpokhrel123@gmail.com
        </div>
        <div className=" flex items-center gap-2">
            <img alt="" src={call} className="w-6" />
            +977 9807059559
        </div>
        <div className=" flex items-center gap-2" >
            <img alt="" src={location} className="w-5" />
            Biratnagar, Nepal
        </div>
        </div>

      </div>

    <div className="text-center items-center justify-between sm:flex border-t border-gray-800 mx-[10%] mt-12 py-6" >
        <p className=" mt-10 mb-5 " >© {new Date().getFullYear()} Sakar. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-6 mt-4 sm:mt-0" >
            <li><a target='_blank' href="https://github.com/akaijana"><img src={github} alt="GitHub" className="w-6 h-6" />GitHub</a></li>
            <li><a target="_blank" href="http://linkedin.com/in/sakarpokhrel/"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" />LinkedIn</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer