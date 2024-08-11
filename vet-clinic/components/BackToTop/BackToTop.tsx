'use client';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  motion,
  useAnimationControls,
  useScroll,
  Variants,
} from 'framer-motion';
import { useEffect } from 'react';

const BackToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.5) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.button
      className="fixed bottom-2 right-2 size-16 rounded-full bg-monza-800 text-4xl text-steel-blue-50"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </motion.button>
  );
};

export default BackToTop;
