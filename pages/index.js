import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import COnnection from '../components/Conection'
export default function Home() {
  let now = new Date()
  return (

    
    <div className="container">
    <Head>
            <link rel="shortcut icon" href="/Gicon.ico" />

    </Head>
      <img  className="Bhome" src="/bg.jpg"/>
      <img className="moon" src="/sun1.png"/>
      <div className="gratingDiv">
          {
            now.getHours() < 12 ? <h1  className="Intro grating">Good Morning</h1> : 
            now.getHours() > 12 && now.getHours() < 16 ? <h1 className="Intro grating">Good Afternoon</h1> :
            <h1 className="Intro grating">Good Evening</h1>
          }
        <h1 className="Intro welcome">Welcome to my portfolio</h1>
        <h1  className="Intro yasaman">I'm Yasaman Forouzesh</h1>
      </div>

        <Header active="home"/>
        <COnnection/>
        
    </div>
  )
}
