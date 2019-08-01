import React, {useState} from 'react'
import Contactform from './Contactform'
import axios from 'axios'

const Contact = () => {
    const [ newName, setNewName ] = useState('')
    const [ newEmail, setNewEmail ] = useState('')
    const [ clientMessage, setClientMessage ] = useState('')
    const [ success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        //stop page reloading
        e.preventDefault()
        //store inputs in mailobject
        const mailObject = {
            name: newName,
            mail: newEmail,
            message: clientMessage
        }
        //check inputs

        //create new mail
        createMail(mailObject)

        //reset fields
        setNewName('')
        setNewEmail('')
        setClientMessage('')
    }

    const createMail = (newObject) => {
        console.log(newObject)
        axios
            .post('/send', newObject)
            .then(response => {
                if(response.status === 200){
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 5000)
                }
                console.log(response.status)
            })
    }

    const showInput = (e) => {
        //in what field is user typing
        const whatChanged = e.target.getAttribute('name')
        //what is user typing
        const newInput = e.target.value
        //change correct state
        switch(whatChanged) {
            case 'name':
                setNewName(newInput)
                break;
            case 'email':
                setNewEmail(newInput)
                break;
            case 'message':
                setClientMessage(newInput)
        }
    }

    const Feedback = () => {
        if (success === true) {
            return (
                <div className="successMessage">
                    <p>You're message has been sent!</p>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className="contact-container">
            <div className="page-header">
                <h1>Contact me</h1>
                <p>Got any questions?</p>
                <p>Send me a message and I'll get back to you as soon as possible.</p>
            </div>

            <div className="feedback-container">
                <Feedback />
            </div>

            <Contactform
                submit={handleSubmit}
                name={newName}
                email={newEmail}
                message={clientMessage}
                change={showInput}
            />

            {/* <div className="form-container">
                <form method="post" action="send">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label for="message">Message:</label>
                        <textarea name="message" />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default Contact 