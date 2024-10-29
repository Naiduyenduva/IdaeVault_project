

function Card() {
    return(
        <>
            <div className="card">
                <h1 className="pro-title">Project Alpha</h1>
                <h2 className="description">A cutting-edge web application showcasing modern development practices.</h2>
                <h2 className="techstack">Techstack</h2>
                <button className="tech">React</button>
                <button className="tech">Next.js</button>
                <button className="tech">Typescript</button>
                <button className="tech">Express.js</button>
                <h2 className="features">Features</h2>
                <p className="text">Responsive design</p>
                <p className="text">Dark mode support</p>
                <p className="text">API Integration</p>
            </div>
        </>
    )
}
export default Card;