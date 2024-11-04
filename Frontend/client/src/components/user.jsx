import { useState } from "react";
import UserProjects from "./UserProjects";
import AllProjects from "./AllProjects";
import ProjectData from "./ProjectData";

function User() {

    const [allProjects, setAllProjects] = useState(false);
    const [myProjects, setMyProjects] = useState(false);
    const [componentVisible, setComponentVisible] = useState(false);


    function addIdea() {
        setComponentVisible(true);
        setMyProjects(false);
        setAllProjects(false);
    }

    function projectsHandler() {
        setMyProjects(true);
        setAllProjects(false);
        setComponentVisible(false);
    }
    function allProjectsHandler () {
        setAllProjects(true);
        setComponentVisible(false)
        setMyProjects(false);
    }

    return (
        <>
        <div className="add-buttons">
            <button  onClick={projectsHandler} className="add-idea">My Projects</button>
            <button  onClick={addIdea} className="add-idea">Add project</button>
            <button  onClick={allProjectsHandler} className="add-idea">All projects</button>
        </div>
        { componentVisible && <ProjectData />}
             { allProjects &&<AllProjects />}
             { myProjects && <UserProjects />}
        </>
    )
}

export default User;