import React from 'react'
import mywork_data from '../../assets/mywork_data'
import { ArrowRight } from 'lucide-react'
import { send } from '../../assets/assets'

const Work = () => {
  return (
    <div id='work' className="w-full px-[12%] py-10 scroll-mt-20">

        <h2 className="text-center text-5xl">My Work</h2>
        <div className="grid  gap-5 my-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {
                mywork_data.map((project, index)=>(
                    <div  key={index} style={{ backgroundImage: `url(${project.w_img})` }} className=" aspect-square background-no-repeat shadow-2xl bg-cover bg-center rounded-lg relative cursor-pointer group transition-transform duration-700 hover:scale-105">
                        <div className=" bg-gray-200 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between gap-3 px-5 py-3 duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700" >{project.description}</p>
              </div>
              <a href={project.link} className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition" >
                <img alt="send icon" src={send} className="w-5" />
              </a>
            </div>
                    </div>
                ))
            }
        </div>

        <a href="" className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500 ">View All Projects <ArrowRight size={15} className="w-4 mt-1" /></a>
    </div>
  )
}

export default Work