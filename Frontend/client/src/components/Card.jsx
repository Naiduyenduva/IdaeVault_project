import React from "react";


function Card({ projects }) {
    return(
        <>
        <div className="whole-card">
        {
            projects.map((item,index)=> (
                <div className="card" key={index}>
                    <h1 className="pro-title">{item.title}</h1>
                    <h2 className="description">{item.description}</h2>
                    <h2 className="techstack">Techstack</h2>
                    {
                        item.techStack.split(',').map((tech,index)=>(
                            <button className="tech" key={index}>{tech}</button>
                        ))
                    }
                    
                    <h2 className="features">Features</h2>
                    {
                        item.keyFeatures.split(',').map((featuress,index1)=>(
                            <ul>
                                <li className="text" key={index1}>{featuress}</li>
                            </ul>
                        ))
                    }
            </div>
            ))
        }
        </div>
        </>
    )
}
export default Card;