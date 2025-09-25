import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProjectCard from "./components/ProjectCard";

export default function App() {
  const projects = [
    {
      title: "Robotic Arm Simulation",
      desc: "3-DOF robotic arm simulation with kinematics.",
      link: "#",
    },
    {
      title: "CFD Turbine Blade",
      desc: "ANSYS Fluent airflow analysis on a turbine blade.",
      link: "#",
    },
    {
      title: "Autonomous Rover",
      desc: "ROS-based rover with obstacle avoidance.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Will Wolf</h1>
        <p className="text-gray-600">Mechanical Engineering Student | Innovator</p>
      </header>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500">
        © {new Date().getFullYear()} Will Wolf
      </footer>
    </div>
  );
}

