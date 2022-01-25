import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [isFormSubmitting, setIsFormSubmitting] = useState(0);
    const Spineer = () => {
        return (
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        );
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleFormSubmit = (event) => {
        setIsFormSubmitting(1);
        event.preventDefault();
    }

    return (
        <div className="container contact-container">
            <h2 className="text-center text-primary fw-bold">Contact Me</h2>
            <form className="contact-form shadow-sm p-3" onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name" value={name} onChange={handleNameChange} />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Email address</label>
                    <textarea className="form-control" id="message" placeholder="Enter Message" rows="6" value={message} onChange={handleMessageChange} />
                </div>
                <button type="submit" class="btn btn-primary">{isFormSubmitting === 0 ? 'Send' : "Sending"} {isFormSubmitting === 0 ? <i class="bi bi-send"></i> : <Spineer />}</button>
            </form>
        </div>
    );
}

export default Contact;