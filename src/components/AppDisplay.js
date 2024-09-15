import { motion } from 'framer-motion';

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const AppDisplay = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition}
  >
    {children}
  </motion.div>
);

export default AppDisplay;