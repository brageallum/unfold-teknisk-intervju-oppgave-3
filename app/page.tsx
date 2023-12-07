"use client";
import { FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between items-center flex-col">
      <div className="my-10">
        <b>Shared</b> <span className=" text-gray-500">by you</span>
      </div>
      <motion.img
        className="relative w-96 h-96 rounded overflow-hidden mb-10 shadow-xl object-cover"
        layoutId="lost-in-tokyo-image"
        transition={{ type: "spring", bounce: 0.25, duration: 0.35 }}
        src="https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=3247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cover image. Shows a bustling narrow alley at night, illuminated by the warm glow of paper lanterns with Japanese characters. A couple of people can be seen in the distance, walking by small traditional shops and restaurants adorned with hanging decorations and flowers, creating an intimate and inviting atmosphere."
      ></motion.img>
      <h1 className="font-bold text-5xl mb-8">Lost in Tokyo</h1>
      <span className="w-80 mb-10 text-center text-xl">
        Minim enim adipisicing ea ipsum. Culpa labore non culpa sint sint
        laboris veniam ea et consequat.
      </span>
      <Link
        href="/lost-in-tokyo"
        className="bg-gray-950 text-white p-8 text-4xl rounded-full mb-10"
        title="expand article"
      >
        <FaExpand />
      </Link>
    </main>
  );
}
