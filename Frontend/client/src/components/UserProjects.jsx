import { useEffect, useState } from "react";
import Card from "./Card";


function UserProjects () {
    const [data,setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   

    useEffect (() => {

            async function handleData () {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch('https://idaevault.onrender.com/user/ideas', {
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

                }
                catch (err) {
                    setError(err.message);
                }finally {
                    setLoading(false); // Set loading to false after the fetch is done
                }
            }
            handleData(); // Call the function here

    },[]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
        <div className="projects-container">
        <Card projects={data} /> 
            </div>       
        </div>
    )
}

export default UserProjects;