import { useState, useEffect } from "react";
import UserProjects from "./UserProjects";
import AllProjects from "./AllProjects";
import ProjectData from "./ProjectData";

function User({setIsLoggedIn}) {

    const [allProjects, setAllProjects] = useState(false);
    const [myProjects, setMyProjects] = useState(false);
    const [componentVisible, setComponentVisible] = useState(false);
    const [ projectsDefault, setProjectsDefault ] = useState(true);

    useEffect(()=> {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
      },[]);  


    function addIdea() {
        setComponentVisible(true);
        setMyProjects(false);
        setAllProjects(false);
        setProjectsDefault(false);
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
        setProjectsDefault(false);
    }

    return (
        <>
        <div className="user-bg">
            <div className="add-buttons">
                <button  onClick={projectsHandler} className="add-idea">My Projects</button>
                <button  onClick={addIdea} className="add-idea">Add project</button>
                <button  onClick={allProjectsHandler} className="add-idea">All projects</button>
            </div>
            { projectsDefault && <AllProjects />}
            { componentVisible && <ProjectData />}
            { allProjects &&<AllProjects />}
            { myProjects && <UserProjects />}
        </div>
        </>
    )
}

export default User;