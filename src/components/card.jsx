import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
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

function Card({ src }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex align-middle justify-center pb-10 lg:pb-5"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="w-[21rem] h-64 px-6 bg-secondary flex flex-col items-center justify-center text-center rounded-xl xl:w-[18rem]">
        <FontAwesomeIcon icon={src} size="2x" className="text-primary" />
        <br />
        <div>
          <h1 className="text-fourth">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

function CardGrid() {
  return (
    <motion.div
      className='w-full h-full grid md:grid-cols-2 justify-center items-center xl:grid-cols-4'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card src={faCoffee} />
      <Card src={faAppleAlt} />
      <Card src={faCheckCircle} />
      <Card src={faAppleAlt} />
    </motion.div>
  );
}

export default CardGrid;
