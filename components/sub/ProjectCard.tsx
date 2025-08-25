import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full max-h-48 object-cover"
        loading="lazy"
        data-testid="project-image"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </a>
        </h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
