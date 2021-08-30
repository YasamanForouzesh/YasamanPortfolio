import Link from 'next/link'
export default function Header(props){
    return(
        <>
            <nav id="nav">
                <img className="navbar pic" src="/yasi1.jpg"/>
                <div className="Wnavbar">
                    <Link href="/">
                        <p  className={`navbar home ${props.active == "home" ? "active" : null}`}>Home</p>
                    </Link>
                    <Link href="/about">
                        <p  className={`navbar ${props.active == "about" ? "active" : null}`}>About</p>
                    </Link>
                    <Link href="/skills">
                        <p   className={`navbar ${props.active == "skill" ? "active" : null}`}>Skills</p>
                    </Link>
                    <Link href="/projects">
                        <p   className={`navbar ${props.active == "project" ? "active" : null}`}>Projects</p>
                    </Link>
                    <Link href="/contact">
                        <p   className={`navbar ${props.active == "contact" ? "active" : null}`}>Contact</p>
                    </Link>
                </div>
            </nav>
        </>
    )
}