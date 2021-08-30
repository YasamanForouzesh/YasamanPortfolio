// import Header from "../components/Header"
// import Connection from "../components/Conection"
// import styles from "../styles/Skill.module.css"
// export default function Skills(){
//     return(
//         <div className={styles.cover}>
//             <Header/>
//             <Connection/>
//             <div className={styles.skills}>
//             <div className={styles.sqlDiv}>
//                 <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/sql.png"/>
//                 </div>
//                 <h2 className={styles.h2}>SQL</h2>
//             </div>
//             <div className={styles.mongooDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/mongodb.png"/>
//                 </div>
//                 <h2 className={styles.h2}>moongodb</h2>
//             </div>
//             <div className={styles.nodeDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/node.png"/>
//                 </div>
//                 <h2 className={styles.h2}>node.js</h2>
//             </div>
//             <div className={styles.reactDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/react.png"/>
//                 </div>
//                 <h2 className={styles.h2}>React.js</h2>
//             </div>
//             <div className={styles.gQlDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/gQl.png"/>
//                 </div>
//                 <h2 className={styles.h2}>GraphQL</h2>
//             </div>
//             <div className={styles.cssDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/cssT.png"/>
//                 </div>
//                 <h2 className={styles.h2}>Css</h2>
//             </div>
//             <div className={styles.gQlDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/gQl.png"/>
//                 </div>
//                 <h2 className={styles.h2}>GraphQl</h2>
//             </div>
//             <div className={styles.pythonDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/python.png"/>
//                 </div>
//                 <h2 className={styles.h2}>Python</h2>
//             </div>
//             <div className={styles.htmlDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/html.png"/>
//                 </div>
//                 <h2 className={styles.h2}>Html</h2>
//             </div>
//             <div className={styles.testDiv}>
//             <div className={styles.imgDiv}>
//                 <img className={styles.img} src="/bootstrap.png"/>
//                 </div>
//                 <h2 className={styles.h2}>Bootstrap</h2>
//             </div>
//             </div>
//         </div>
//     )
// }

//////////////////////////////// with global css
import Header from "../components/Header"
import Connection from "../components/Conection"
export default function Skills(){
    return(
        <div className="cover">
            <Header active="skill"/>
            <Connection/>
            <div className="skills">
            <div className="sqlDiv">
                <div className="imgDiv">
                <img className="img" src="/sql.png"/>
                </div>
                <h2 className="text">SQL</h2>
            </div>
            <div className="mongooDiv">
            <div className="imgDiv">
                <img className="img" src="/mongodb.png"/>
                </div>
                <h2 className="text">moongodb</h2>
            </div>
            <div className="nodeDiv">
            <div className="imgDiv">
                <img className="img" src="/node.png"/>
                </div>
                <h2 className="text">node.js</h2>
            </div>
            <div className="reactDiv">
            <div className="imgDiv">
                <img className="img" src="/react.png"/>
                </div>
                <h2 className="text">React.js</h2>
            </div>
            <div className="gQlDiv">
            <div className="imgDiv">
                <img className="img" src="/gQl.png"/>
                </div>
                <h2 className="text">GraphQL</h2>
            </div>
            <div className="cssDiv">
            <div className="imgDiv">
                <img className="img" src="/cssT.png"/>
                </div>
                <h2 className="text">Css</h2>
            </div>
            <div className="gQlDiv">
            <div className="imgDiv">
                <img className="img" src="/gQl.png"/>
                </div>
                <h2 className="text">GraphQl</h2>
            </div>
            <div className="pythonDiv">
            <div className="imgDiv">
                <img className="img" src="/python.png"/>
                </div>
                <h2 className="text">Python</h2>
            </div>
            <div className="htmlDiv">
            <div className="imgDiv">
                <img className="img" src="/html.png"/>
                </div>
                <h2 className="text">Html</h2>
            </div>
            <div className="testDiv">
            <div className="imgDiv">
                <img className="img" src="/bootstrap.png"/>
                </div>
                <h2 className="text">Bootstrap</h2>
            </div>
            </div>
        </div>
    )
}