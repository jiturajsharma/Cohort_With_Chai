import {useState} from 'react'
import { useContactForm } from './hooks/useContactForm'
useContactForm


function ContactForm() {
    cosnt [ form, setForm] = useState({name: "", email:"", message: ""})
    const {loading, submitContact, successMessage, errorMessage} = useContactForm()
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target, value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
    <div>ContactForm
    <form onSubmit={handleSubmit}>
        <input 
            name = "name"
            value = {form.name}
            onChange={handleChange()}
            placeholder='Your name'
        />
        <input 
            name = "email"
            value = {form.email}
            onChange={handleChange()}
            placeholder='Your email'
        />
        <textarea 
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder= "Your mesage"
        />
        <button type='submit' disabled={loading}>
            {loading ? "Sending..." : "Send"}
        </button>
    </form>
    {successMessage && <p>{successMessage}</p>}
    {errorMessage && <p>{errorMessage }</p>}
    </div>
    )
}

export default ContactForm