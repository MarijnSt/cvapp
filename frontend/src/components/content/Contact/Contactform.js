import React from 'react'

const Contactform = ({submit, name, email, message, change}) => {

    return (
        <div className="form-container">
            <form onSubmit={submit}>
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" value={name} onChange={change} required/>
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" name="email" value={email} onChange={change} required/>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea name="message" value={message} onChange={change} required/>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
            </form>
        </div>
    )
}

export default Contactform