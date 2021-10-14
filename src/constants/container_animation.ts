import { Variants } from 'framer-motion';

export const CONTAINER_ANIMATION: Variants = {
  hidden: {
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
  visible: {
    transition: {
      duration: 0.25,
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};
