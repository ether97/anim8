"use client";

import { motion } from "framer-motion";

import Navbar from "./Navbar";

import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="w-full h-full">
      <Navbar key={pathname} />
      {children}
    </div>
  );
};

export default Layout;
