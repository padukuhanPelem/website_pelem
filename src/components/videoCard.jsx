import React from 'react';

const VideoCard = ({ src, type, heading, backgroundVideo, ...props }) => {
  return (
    <div className="relative w-full h-[21rem] md:h-[36rem] xl:h-screen flex flex-col items-center justify-center bg-black bg-opacity-50">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        >
          <source src={backgroundVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center ">
        <h1 className='text-xl text-center font-bold py-5 md:text-2xl xl:text-3xl' {...props}>{heading}</h1>
        <div className="w-full h-fit flex items-center justify-center rounded-xl ">
          {type === 'video' ? (
            <video src={src} type="video/mp4" controls autoPlay className="w-[22rem] h-auto rounded-xl md:w-[46rem] xl:w-3/4"></video>
          ) : (
            <img src={src} alt="Media" className="w-[22rem] h-[12rem] rounded-xl md:w-[46rem] md:h-[24rem] xl:w-3/5 xl:h-[40rem]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
