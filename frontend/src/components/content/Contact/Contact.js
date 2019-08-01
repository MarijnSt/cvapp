import React from 'react'

import Mail from '../../images/menu-svg/contact.svg'
import Linked from '../../images/social/linkedin.svg'

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="page-header">
                <h1>Contact me</h1>
                <p>Got any questions?</p>
                <p>Send me a message and I'll get back to you as soon as possible.</p>
            </div>
            <div className="form-container">
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
            </div>
            <div className="feedback-container">
                Elaba
            </div>
        </div>
    )
}

export default Contact 