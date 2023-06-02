"use client";

import { motion } from "framer-motion";
import HomeTitle from "./HomeTitle";
import HomeSubtitle from "./HomeSubtitle";

const HomeArticle = () => {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      variants={{
        visible: { transition: { delayChildren: 0.2 } },
      }}
    >
      <HomeTitle />
      <HomeSubtitle />
    </motion.article>
  );
};

export default HomeArticle;
