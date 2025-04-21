import { useState } from "react"

function Signup(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pasword, setPassword] = useState("")
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState("") 

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        setEmail('')
        
        // make an api call to backend with data
        // get response backend
        // take action based on response

    }
    return(
        <div className="signup">
            <h1>Hanji this is Signup page only</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="name" 
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    id="password"
                    required
                    value={pasword}
                    onChange={(e) =>setPassword(e.target.value)}
                    />
                </div>
                <button
                type="submit"
                disabled={loading}
                >{loading ? 'Signup...': 'Signup'}</button>
            </form>
        </div>
    )
}
export default Signup