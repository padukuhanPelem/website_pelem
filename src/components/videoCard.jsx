import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const videoCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const VideoCard = ({ src, type, heading, backgroundVideo, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.5, // Trigger when 50% of the card is visible
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[21rem] md:h-[36rem] xl:h-screen flex flex-col items-center justify-center bg-black bg-opacity-50"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <motion.div className="relative z-10 w-full h-full flex flex-col items-center justify-center" variants={videoCardVariants}>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-xl text-center font-bold py-5 md:text-2xl xl:text-3xl"
          {...props}
        >
          {heading}
        </motion.h1>
        <div className="w-full h-fit flex items-center justify-center rounded-xl">
          {type === 'video' ? ( 
            <video src={src} type="video/mp4" controls autoPlay className="w-[22rem] h-auto rounded-xl md:w-[46rem] xl:w-3/4"></video>
          ) : (
            <img src={src} alt="Media" className="w-[22rem] h-[12rem] rounded-xl md:w-[46rem] md:h-[24rem] xl:w-3/5 xl:h-[36rem]" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCard;
