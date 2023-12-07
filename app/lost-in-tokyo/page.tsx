"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaMessage, FaXmark } from "react-icons/fa6";

export default function LostInTokyo() {
  return (
    <>
      <motion.img
        className="absolute w-full h-full top-0 left-0 object-cover"
        layoutId="lost-in-tokyo-image"
        transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
        src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=3247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background image. Shows a bustling narrow alley at night, illuminated by the warm glow of paper lanterns with Japanese characters. A couple of people can be seen in the distance, walking by small traditional shops and restaurants adorned with hanging decorations and flowers, creating an intimate and inviting atmosphere."
      ></motion.img>
      <AnimatePresence>
        <div className="flex flex-col justify-end items-start h-full relative px-10 py-16 text-white">
          <div className="absolute top-0 left-0 text-white text-6xl m-5 block">
            <Link href="/" title="exit article">
              <FaXmark />
            </Link>
          </div>
          <motion.div
            className="text-8xl font-bold mb-6 relative w-96"
            initial={{ opacity: 0, top: 50 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1,
              delay: 0.2,
            }}
          >
            Lost in Tokyo
          </motion.div>
          <div className="flex justify-between w-full px-5 text-2xl">
            <motion.div
              className="relative"
              initial={{ opacity: 0, top: 25 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.6,
                delay: 0.4,
              }}
            >
              By Jonathan Vik
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, left: 10 }}
              animate={{ opacity: 1, left: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.6,
                delay: 0.4,
              }}
            >
              <Link
                href="/lost-in-tokyo/comments"
                title="read comments"
                className="flex items-center"
              >
                <span className="mr-4">8</span>
                <FaMessage role="img" />
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
