import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCheckCircle, faMapLocationDot, faLandmark, faSeedling , faFaceSmile} from '@fortawesome/free-solid-svg-icons';
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

function Card({ src, isi}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.4, // Trigger when 10% of the card is visible
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
      <div className="w-[21rem] h-[28rem] px-6 bg-secondary flex flex-col items-center justify-top text-center rounded-xl xl:w-[18rem] xl:h-[34rem]">
        <FontAwesomeIcon icon={src} size="2x" className="text-primary mt-10" />
        <br />
        <div>
          <h1 className="text-fourth">
           {isi}
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
      <Card src={faMapLocationDot} isi={'Dusun Pelem merupakan salah satu dusun yang terletak di Desa Jepitu, kapanewon Girisubo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta, Indonesia. Dusun ini terkenal dengan keindahan alamnya yang mempesona dan komunitas yang ramah. Keberadaan dusun ini memainkan peran penting dalam menjaga tradisi dan budaya lokal yang telah diwariskan dari generasi ke generasi.'}/>
      <Card src={faLandmark} isi={'Dusun Pelem memiliki kurang lebih 70 kartu keluarga yang tersebar di empat Rukun Tetangga (RT) dan satu Rukun Warga (RW). Struktur sosial di dusun ini sangat terorganisir dengan baik, memungkinkan warga untuk bekerja sama dalam berbagai kegiatan dan menjaga keharmonisan lingkungan. Setiap keluarga di dusun ini saling mengenal dan mendukung satu sama lain dalam berbagai aspek kehidupan sehari-hari.'}/>
      <Card src={faSeedling} isi={'Rata-rata mata pencaharian warga Dusun Pelem adalah bertani dan beternak. Pertanian menjadi tulang punggung perekonomian dusun ini, dengan berbagai jenis tanaman pangan yang ditanam, termasuk padi, jagung, dan sayur-sayuran. Selain itu, banyak warga yang memelihara ternak seperti sapi, kambing, dan unggas. Kehidupan agraris ini mencerminkan kearifan lokal dan ketergantungan masyarakat pada alam.'}/>
      <Card src={faFaceSmile} isi={'Warga Dusun Pelem sangat menjunjung tinggi budaya sopan santun, saling menyapa, dan gotong royong. Nilai-nilai ini tercermin dalam interaksi sehari-hari, di mana setiap orang saling menghormati dan membantu satu sama lain. Gotong royong menjadi inti dari kehidupan sosial di dusun ini, baik dalam kegiatan rutin seperti membersihkan lingkungan maupun dalam perayaan tradisional. Kebersamaan dan kekompakan warga menjadi salah satu kekuatan utama dalam menghadapi berbagai tantangan.'}/>

    </motion.div>
  );
}

export default CardGrid;
