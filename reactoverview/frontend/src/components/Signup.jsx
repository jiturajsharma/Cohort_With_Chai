import  { useState } from 'react'
import apiClient from '../../service/apiClient'
import { useNavigate } from "react-router"

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // for navigator
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            console.log(`Trying to do a signup`)
            const data = await apiClient.signup(name, email, password)
            console.log(`Signup response: `, data)

            if(data.success){
                navigate("/login")
            }
            else{
                setError(data.message || 'Signup failed')
            }
        } catch (error) {}
        finally{
            setLoading(false)
        }

        // make an api call to backend with data
        // get response from backend
        // take action based on response 
    }

    return (
    <div className='sinup'>
        <h1>Welcome to Signup page</h1>

        {error && <div>Error: {error}</div>}

        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                name = "name"
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>

            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                name = "email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

                <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input 
                type="password"
                name = "password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

{/* Conditional rendering in react */}
        <button
            type='submit'
            disabled= {loading}
        >
            {loading ? " Signup... " : "Sinup"} 
        </button>

        
        </form>
    </div>
  )
}

export default Signup