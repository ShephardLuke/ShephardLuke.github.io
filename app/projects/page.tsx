'use client'

import Footer from "../website-shared/footer"
import Header from "../website-shared/header"
import { Project } from "./Project";

import Projects from "./projects.json";

export default function Page() {
    console.log(Project.getProjectsFromJSON(Projects));
    

    return (
        <>
            {/* <Header currentPage="Projects"/> */}
            {/* <div className="p-10">
                <h1>Projects</h1>
            </div> */}
            {/* <Footer/> */}
        </>
    )
}