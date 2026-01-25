"use client"
import React from 'react';
import {motion} from 'framer-motion';

 type FadeInProps = {
    children: React.ReactNode;
    delay?:number;
}

function FadeIn({children,delay=0}:FadeInProps  ) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}>
         { children}
    </motion.div>
  )
}

export default FadeIn