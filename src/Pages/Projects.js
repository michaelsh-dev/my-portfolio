import React, { useEffect, useState } from "react";
import Project from "../Components/Project";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://69d4ac3ad396bd74235d5f9f.mockapi.io/api/v1/project")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.log("Data bukan array:", data);
          setProjects([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {Array.isArray(projects) &&
            projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                techstack={project.techstack}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
              />))}
        </div>
      </section>
    </main>
  );
}

export default Projects;