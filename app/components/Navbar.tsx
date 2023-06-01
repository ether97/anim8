"use client";

import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";

import { CgLogIn } from "react-icons/cg";
import { BsDropletFill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/pages/home") {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full flex items-center justify-center backdrop-blur bg-white/10 h-[80px] fixed z-10"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: 0.5,
        }}
        className="w-full flex items-center justify-between fixed top-0  h-full  max-w-[1500px]"
      >
        <motion.div
          variants={reveal}
          className="flex flex-row items-center justify-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <BsDropletFill size={24} />
          <h1>Droplet</h1>
        </motion.div>

        <motion.div
          variants={reveal}
          className="flex gap-5px items-center cursor-pointer"
        >
          <CgLogIn
            className="cursor-pointer"
            size={30}
            onClick={() => router.push("/pages/test")}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
