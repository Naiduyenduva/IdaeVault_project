import { useEffect, useState } from "react";
import Card from "./Card";
import ProjectData from "./ProjectData";
import AllProjects from "./AllProjects";


function UserProjects () {
    const [data,setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [componentVisible, setComponentVisible] = useState(false);
    const [allProjects, setAllProjects] = useState(false);
    const [myProjects, setMyProjects] = useState(false);

    function addIdea() {
        setComponentVisible(false);
    }
    function projectsHandler() {
        setMyProjects(true);
        setAllProjects(false);
    }
    function allProjectsHandler () {
        setAllProjects(true);
        setMyProjects(false);
    }

    useEffect (() => {

            async function handleData () {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('http://localhost:3000/user/ideas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    });
            
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                    
                    const fetchedData = await response.json();
                    setData(fetchedData.ideas);
                    console.log(fetchedData.ideas);

                }
                catch (err) {
                    setError(err.message);
                }finally {
                    setLoading(false); // Set loading to false after the fetch is done
                }
            }
            handleData(); // Call the function here

    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
        <div className="projects-container">
        <button  onClick={projectsHandler} className="add-idea">My Projects</button>
        <button  onClick={addIdea} className="add-idea">Add project</button>
        <button  onClick={allProjectsHandler} className="add-idea">All project ideas</button>
        <Card projects={data} /> 
            </div>
        { componentVisible && <ProjectData />}
        { allProjects && <AllProjects />}
        { myProjects && <ProjectData />}
        </div>
    )
}

export default UserProjects;