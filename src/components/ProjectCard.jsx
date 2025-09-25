import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-500 font-semibold hover:underline"
      >
        View Project
      </a>
    </motion.div>
  );
}

