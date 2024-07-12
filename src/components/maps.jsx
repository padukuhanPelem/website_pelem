import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const mapVariants = {
  hidden: { x: -200 },
  visible: { x: 0 },
};

const mapOpacity = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Maps = ({ src, head, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.3, // Trigger when 30% of the card is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className='w-full h-full p-4 flex justify-center items-center lg:grid lg:grid-rows-2 lg:h-[32rem]'
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.iframe
        src={src}
        className='rounded-xl md:w-[14rem] md:h-[14rem] lg:w-[24rem] xl:h-[24rem]'
        width="150"
        height="150"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        variants={mapVariants}
      ></motion.iframe>
      <motion.div
        className='ps-4 text-gold w-48 md:w-[9rem] lg:w-[24rem] lg:text-center'
        variants={mapOpacity}
      >
        <h1 className='font-bold'>{head}</h1>
        <p className='text-fourth'>{desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default Maps;
