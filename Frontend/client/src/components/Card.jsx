import React from "react";

    const items = [{
        title: "Project Alpha",
        description: "A cutting-edge web application showcasing modern development practices.",       
        techStack: ["React", "Next.js", "Express.js", "Javascript",],
        features: ["Implementation", "authentication", "Mastering"]
    },
    {
        title: "Mastering datastructures",
        description: "A cutting-edge web application showcasing modern development practices.",       
        techStack: ["React", "Flask", "Fast API", "Python"],
        features: ["Implementation", "authentication","React Native", "Typescript"]
    },
    {
        title: "Built an app for location Finder",
        description: "A cutting-edge web application showcasing modern development practices.",       
        techStack: ["React", "Django", "React Native", "Flutter"],
        features: ["Authentication", "password hashing","Mastering datastructures", "DSA cooker"]
    }
    ];

function Card() {
    return(
        <>
        {
            items.map((item,index)=> (
            <div className="card" key={index}>
                <h1 className="pro-title">{item.title}</h1>
                <h2 className="description">{item.description}</h2>
                <h2 className="techstack">Techstack</h2>
                {
                    item.techStack.map((tech,index)=>(
                        <button className="tech" key={index}>{tech}</button>
                    ))
                }
                <h2 className="features">Features</h2>
                {
                    item.features.map((featuress,index)=>(
                        <p className="text" key={index}>{featuress}</p>
                    ))
                }
            </div>
            ))
        }
        </>
    )
}
export default Card;