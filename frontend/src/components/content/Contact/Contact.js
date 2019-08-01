import React, {useState} from 'react'
import Contactform from './Contactform'

const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ clientMessage, setClientMessage ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        //inputs controleren
        alert('elaba')
    }

    const showInput = (e) => {
        //in what field is user typing
        const whatChanged = e.target.getAttribute('name')
        //what is user typing
        const newInput = e.target.value
        //change correct state
        switch(whatChanged) {
            case 'name':
                setName(newInput)
                break;
            case 'email':
                setEmail(newInput)
                break;
            case 'message':
                setClientMessage(newInput)
        }
    }

    return (
        <div className="contact-container">
            <div className="page-header">
                <h1>Contact me</h1>
                <p>Got any questions?</p>
                <p>Send me a message and I'll get back to you as soon as possible.</p>
            </div>

            <Contactform
                submit={handleSubmit}
                name={name}
                email={email}
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
            <div className="feedback-container">
                Elaba
            </div>
        </div>
    )
}

export default Contact 