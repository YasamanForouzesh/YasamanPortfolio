import styles from "../styles/Contact.module.css"
import Connection from "../components/Conection"
import Header from "../components/Header"
import COnnection from "../components/Conection"
import {Form, Button} from "react-bootstrap"
import { useState } from "react"
export default function contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [submittedMsg, setSubmittedMsg] = useState('Please fill out all fields of the form')
    const submitForm = (e) => {
        e.preventDefault()
        console.log('Sending')

        if (name && email && body) {
            let data = {
                name,
                email,
                body
            }
    
            fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setName('')
                    setEmail('')
                    setBody('')
                    setSubmittedMsg('Thanks for the message!')
                }
            })
        }

        setSubmitted(true) 
    }

        
    return(
        <>  
            <div className={styles.container}>
                <h1 className={styles.h1}>contact</h1>
                < form className={styles.form} name="contact" method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact' />
                
                <p>
                    <label className={styles.labal} htmlFor='name' >Name</label>
                    <input  placeholder="Name" className={styles.input} onChange={(e)=>{setName(e.target.value)}} type='text' value={name} id='name' name='name'></input>
                </p>
            
                <p>
                    <label className={styles.labal} htmlFor='email'>Email</label>
                    <input className='contact-field' className={styles.input} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} type='text' value={email} id='email' name='email'></input>
                </p>

                <p>
                    <label  className={styles.labal} htmlFor='message'>Message</label>
                    <textarea className={styles.content}  placeholder="Message" onChange={(e)=>{setBody(e.target.value)}} value={body} id='message' name='message'></textarea>
                </p>

                <p className={styles.labal}>
                    < input className={styles.button} onClick={(e)=>{submitForm(e)}} type='submit' value='Send' /> { submitted ? <span className={styles.labal}> {submittedMsg} </span> : null }
                </p>
            </form>
            </div>
            <h1 className={styles.bye}>I'm so excited to conect with you and hear back from you. Thanks to see my portfolio.</h1>
            <img className={styles.ex} src="/girl.jpg"/>
            <COnnection/>
            <Header active="contact"/>
        </>
    )
}