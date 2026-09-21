"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // 1.5s de apresentação elegante e legível

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ pointerEvents: visible ? "auto" : "none" }}
          className="fixed inset-0 z-[999] bg-[#180D09] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Brilho suave de forno ao fundo */}
          <div className="absolute w-72 h-72 rounded-full bg-caramel-500/10 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center relative z-10"
          >
            {/* Logo Oficial Transparente */}
            <div className="relative w-44 h-32 sm:w-56 sm:h-40 mb-3">
              <Image
                src="/images/preloader-logo.png"
                alt="Padaria Gustmann"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Linha Divisória Dourada */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="w-20 h-[1.5px] bg-caramel-400 mb-3"
            />

            {/* Subtítulo Tradicional */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] font-semibold text-cream-100/80"
            >
              16 anos de tradição em Americana
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
