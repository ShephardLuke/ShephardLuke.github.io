'use client'

import Footer from "../website-shared/footer"
import Header from "../website-shared/header"
import { ALL_PROJECTS } from "./allProjects";
import ProjectDisplay from "./projectDisplay";

export default function Page() {
    const projectDisplays = ALL_PROJECTS.map(project => <ProjectDisplay project={project} key={project.getName()}/>)   

    return (
        <>
            <Header currentPage="Projects"/>
            <div className="main">
                <h1>Projects</h1>
                {projectDisplays}
            </div>
            <Footer/>
        </>
    )
}