import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [formMessage, setFormMessage] = useState({
        'status': '',
        'message': ''
    });
    const [formSubmittingStatus, setFormSubmittingStatus] = useState(0);
    const Spineer = () => {
        return (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setFormSubmittingStatus(1);
        const url = 'https://murlapi.herokuapp.com/index.php?/api/contact';
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('message', message);

        const response =  await axios.post(url, data);
        
        if(response.data.statusCode === 200) {
            setFormMessage({
                'status': 'success',
                'message': response.data.messages[0]
            });
        } else {
            setFormMessage({
                'status': 'error',
                'message': "Please try again later!"
            });
        }
        setEmail("");
        setName("");
        setMessage("");
        setFormSubmittingStatus(0);
    }

    return (
        <div className="container contact-container">
            <h2 className="text-center text-primary fw-bold">Contact Me</h2>
            <form className="contact-form shadow-sm p-3" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={handleNameChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Email Message</label>
                    <textarea className="form-control" id="message" placeholder="Enter Message" rows="6" value={message} onChange={handleMessageChange} required/>
                </div>
                <button type="submit" className={formSubmittingStatus === 0 ? 'btn btn-primary' : "btn btn-primary disabled"}>{formSubmittingStatus === 0 ? 'Send' : "Sending"} {formSubmittingStatus === 0 ? <i className="bi bi-send"></i> : <Spineer />}</button>
                <div className={`mt-2 text-center ${formMessage.status === 'success' ? 'text-success' : 'text-danger'}`}>
                    {formMessage.message}
                </div>
            </form>
        </div>
    );
}

export default Contact;