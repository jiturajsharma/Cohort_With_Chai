import React, { use, useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // make an api call to backend with data
        // get response from backend
        // take action based on response 
    }

    return (
    <div className='sinup'>
        <h1>Welcome to Signup page</h1>
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