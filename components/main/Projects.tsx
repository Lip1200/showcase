import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Utilisation de grid avec des colonnes flexibles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/colormovie.png"
          title="AI-powered movie recommendation system with personalized lists."
          description="This project allows users to create personalized movie lists and receive real-time movie recommendations powered by AI. The recommendations adapt based on the content of the movie list as users add films, making suggestions more accurate over time.

This app is a second-year Bachelor's project and is composed of two main services: a Next.js front-end and a Flask back-end, both containerized via Docker. The back-end handles data with MySQL and provides AI recommendations using ChromaDB."
          link="https://github.com/Lip1200/color_movie"
        />
        <ProjectCard
          src="/wish.png"
          title="OS programing"
          description="C programing focused on system calls, including file locking, file copying, and client-server architecture, culminating in the development of a custom shell capable of compiling itself."
          link="https://github.com/Lip1200/system-calls"
        />
        <ProjectCard
          src="/game.png"
          title="Unity Game"
          description="Co-creation of a networked game using Unity. The game supports multiple players connected via a network, demonstrating complex real-time interactions and synchronization between clients."
          link="https://gitlab.unige.ch/stm_game/game"
        />
      </div>
    </div>
  );
};

export default Projects;
