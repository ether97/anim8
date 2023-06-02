"use client";

import { motion } from "framer-motion";

import { visible } from "../utils/animation";

const HomeTitle = () => {
  return (
    <motion.h1
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible,
      }}
      className="text-[80px] font-bold"
    >
      Only the best artwork.
    </motion.h1>
  );
};

export default HomeTitle;
