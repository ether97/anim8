"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../utils/animation";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

const HomeSubtitle = () => {
  const router = useRouter();
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center flex-row justify-end gap-2 animate-bounce cursor-pointer"
      onClick={() => router.push("/pages/gallery")}
    >
      <motion.h2
        variants={itemVariants}
        className="text-center text-5 text-zinc-600 "
      >
        See for yourself
      </motion.h2>
      <motion.span variants={itemVariants}>
        <AiOutlineArrowRight size={24} className="block text-zinc-600" />
      </motion.span>
    </motion.div>
  );
};

export default HomeSubtitle;
