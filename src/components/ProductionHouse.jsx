import React from 'react'
import disney from '../../public/Images/disney.png'
import marvel from '../../public/Images/marvel.png'
import pixar from '../../public/Images/pixar.png'
import starwars from '../../public/Images/starwar.png'
import nationalG from '../../public/Images/nationalG.png'

import disneyVideo from '../../public/Videos/disney.mp4'
import marvelVideo from '../../public/Videos/marvel.mp4'
import pixarVideo from '../../public/Videos/pixar.mp4'
import starwarsVideo from '../../public/Videos/star-wars.mp4'
import nationalGVideo from '../../public/Videos/national-geographic.mp4'



function ProductionHouse() {
    const productContent=[
        {id:1,img:disney,video:disneyVideo},
        {id:2,img:marvel,video:marvelVideo},
        {id:3,img:pixar,video:pixarVideo},
        {id:4,img:starwars,video:starwarsVideo},
        {id:5,img:nationalG,video:nationalGVideo},
    ]

  return (
    <div className='flex over gap-5 p-2 px-5 md:px-16 scrollbar-hide '>
        {productContent.map((item)=>(
            <div className='border-[2px] border-blue-600 bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-lg relative'>
                <img src={item.img} className='w-full z-10 h-full object-cover ' />
                <video src={item.video} autoPlay loop muted className='absolute top-0 left-0 w-full h-full rounded-lg object-cover z-0 opacity-0 hover:opacity-50 ' />
            </div>
       ))}
    </div>
  )
}

export default ProductionHouse