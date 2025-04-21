import { useState } from "react"
import ApiClient from "../../service/apiClient"
import { data, useNavigate } from "react-router"

// for navigation
const navigate = useNavigate()

function Signup(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pasword, setPassword] = useState("")
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState("test") 
    const [usename, setUsename] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        setEmail('')
        
        // make an api call to backend with data
        // get response backend
        // take action based on response

            try {
                console.log(`Trying to do a signup`)
                await ApiClient.signup(name, email, pasword, usename)
                console.log(`Signup response :`, data)

                if(data.success){
                    navigate("/login")
                }
                else {
                    setError(data.message || 'Signup failed')
                }
            } catch (error) {
                
            }
            finally{
                setLoading(false)
            }
    }
    return(
        <div className="signup">
            <h1>Hanji this is Signup page only</h1>
            {error && <div>Error: {error}</div>}
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
                    <label htmlFor="usename">Username</label>
                    <input 
                    type="usename" 
                    name="usename"
                    id="usename"
                    required
                    value={usename}
                    onChange={(e) =>setUsename(e.target.value)}
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