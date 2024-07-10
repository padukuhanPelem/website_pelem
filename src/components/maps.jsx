import React from 'react';

const Maps = ({src}) => {
  return (
    <div className='w-full h-full p-4 flex justify-center items-center  '>
    <iframe src={src}
      className='rounded-xl md:w-[22rem] md:h-[16rem] lg:w-[36rem] xl:h-[24rem]'
      width="300"
      height="250" 
      style={{border:0}}
      allowfullscreen="" 
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">

    </iframe>

    </div>
  )
}

export default Maps;