"use client";

import { AnimatePresence } from "framer-motion";

interface AnimatePresenceProps {
  children: React.ReactNode;
}

const AnimatePresenceHook: React.FC<AnimatePresenceProps> = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimatePresenceHook;
