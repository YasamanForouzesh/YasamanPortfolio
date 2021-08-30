import COnnection from "../components/Conection"
import Header from "../components/Header"
export default function Projects(){
    // return(
    // <>

    //     <div className="project">
    //         <div className="pdiv p1">
    //             <img className="pong" src="/pong1.JPG"/>
    //         </div>
    //         <div className="pdiv Tp1">
    //             <p className="description">
    //                 Here is the pong description.Here is the pong descriptionHere is the pong descriptionHere is the pong descriptionHere is the pong descriptionHere is the pong descriptionHere is the pong descriptionHere is the pong description
    //             </p>
    //         </div>
    //     </div>
    //     <Header active="project"/>
    //     <COnnection/>
    //     <h1>Hello this project page</h1>
    // </>)
    return (
        <div className="project pt-1">

            <div className="project-box">
                <div className="project-hex" id="project-1">
                    <img className="project2-pic" src="/movie1.JPG" alt="cat-crawler"/>
                    <div className="project-desc">
                        <h3>Movie Favorite</h3>
                        <p className="project-about">A website where users have a personal account to keep their favorite movies and see comments.</p>
                        <p className="project-skills">HTML5 Canvas API, JavaScript, Sequelize, Express, Node.js, CSS</p>
                        <p className="project-links">
                            <a href="https://github.com/YasamanForouzesh/movie_project" target="_blank" rel="noreferrer">Github Repo </a>
                            |
                            <a href="https://finaldeploymentmovie.herokuapp.com/" target="_blank" rel="noreferrer"> Live Site </a>
                        </p>
                    </div>
                </div>
                {/* <div className="project-hex" id="project-2">
                    <img className="project2-pic" src="/movie1.JPG" alt="cat-crawler"/>
                    <div className="project-desc">
                        <h3>Favorite Movie</h3>
                        <p className="project-about">A website where users have a personal account to keep their favorite movies and see comments.</p>
                        <p className="project-skills">HTML5 Canvas API, JavaScript, Sequelize, Express, Node.js, CSS</p>
                        <p className="project-links">
                            <a href="https://github.com/YasamanForouzesh/movie_project" target="_blank" rel="noreferrer">Github Repo </a>
                            |
                            <a href="https://finaldeploymentmovie.herokuapp.com/" target="_blank" rel="noreferrer"> Live Site </a>
                        </p>
                    </div>
                </div> */}
                <div className="project-hex" id="project-3">
                    <img className="project2-pic" src="/pong2.JPG" alt="cat-crawler"/>
                    <div className="project-desc">
                        <h3>Pong Game</h3>
                        <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                        <p className="project-skills">HTML5, Canvas , JavaScript, CSS</p>
                        <p className="project-links">
                            <a href="https://github.com/YasamanForouzesh/project1-pong" target="_blank" rel="noreferrer">Github Repo </a>
                            |
                            <a href="https://yasamanforouzesh.github.io/project1-pong/" target="_blank" rel="noreferrer"> Live Site </a>
                        </p>
                    </div>
                </div>
                {/* <div className="project-hex" id="project-4">
                    <img className="project-pic" src="/Auth.JPG" alt="cat-crawler"/>
                    <div className="project-desc">
                        <h3>Auth</h3>
                        <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                        <p className="project-skills">HTML5 Canvas API, JavaScript, CSS</p>
                        <p className="project-links">
                            <a href="https://github.com/YasamanForouzesh/Auth-SQlAchemy-Flask" target="_blank" rel="noreferrer"> Github Repo</a>
                        </p>
                    </div>
                </div> */}
                <div className="project-hex" id="project-5">
                    <img className="project-pic" src="/Sunvoyage.JPG" alt="cat-crawler"/>
                    <div className="project-desc">
                        <h3>Sunvoyage</h3>
                        <p className="project-about">Dungeon crawler-style video game featuring WASD controls and randomly generated enemies.</p>
                        <p className="project-skills">React, Express, Bootstrap, CSS, HTML, Moongose</p>
                        <p className="project-links">
                            <a href="https://github.com/YasamanForouzesh/sun-voyage-client" target="_blank" rel="noreferrer">Frontend</a>
                            |
                            <a href="https://github.com/YasamanForouzesh/sun-voyage-server" target="_blank" rel="noreferrer">Backend</a>
                            |
                            <a href="http://sunvoyage.herokuapp.com/" target="_blank" rel="noreferrer"> Live Site </a>
                        </p>
                    </div>
                </div>
            </div>
            <COnnection/>
            <Header/>
        </div>
    )
}