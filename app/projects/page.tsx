import React from "react";
import { projects } from "./projects";
import ProjectsComp from "./ProjectsComp";

export default function page() {
    return (
        <main className="flex w-10/12 min-h-screen flex-col items-center  justify-center py-6 m-auto">
            <div className="w-10/12 py-10 bg-gray-900 rounded-md  mt-20">
                <h2 className="mb-5 text-center text-2xl">My Projects</h2>
                {projects.map((project) => {
                    return (
                        <ProjectsComp
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            icon={project.icon}
                            thumbnail={project.thumbnail}
                            key={project.name}
                        />
                    );
                })}
            </div>
        </main>
    );
}
