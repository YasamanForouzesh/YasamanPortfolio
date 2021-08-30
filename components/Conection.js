import styles from '../styles/Float.module.css'
export default function COnnection(){
    return(
        <div className={styles.container}>
            <div className={styles.float}>
                <a href="https://www.linkedin.com/in/yasaman-forouzesh/" target="_blank" className={styles.a}>
                    <img className={styles.linkedin} src="/Linkedin.png"/>
                </a>
                <a href="https://github.com/YasamanForouzesh" target="_blank" className={styles.Agithub}>
                    <img className={styles.github} src="/GitHub.png"/>
                </a>
                <a href='/resume.pdf' target='_blank' aria-label='Resume'>
                    <img className={styles.resume} src="/Resume1.png"/>
                </a>
            </div>
            <h1 className={`${styles["h1"]} ${styles["linkedinT"]}`}>Linkedin</h1>
            <h1 className={`${styles["h1"]} ${styles["githubT"]}`}>GitHub</h1>
            <h1 className={`${styles["h1"]} ${styles["resumeT"]}`}>Resume</h1>
        </div>
//     <div>
// <img className={styles.test} src="Linkedin.png"/>
// <div className={styles.div1}>

// <h1 className={styles.test1}>here is the test</h1>
// </div>
// </div> 
        )
}



{/* <div>
<img className={styles.test} src="Linkedin.png"/>
<div className={styles.test1}>

<h1 >here is the test</h1>
</div>
</div> */}