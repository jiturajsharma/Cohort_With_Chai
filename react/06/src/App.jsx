import { useState, useEffect } from "react"
import { useSpecialChai } from "./hooks/useSpecialChai"

export function App(){
    const {chai, loading, error} = useSpecialChai()
    const [message, setMessage] = useState("Loading...")

    useEffect( () =>{  // components mounts

        fetch(`quote/random`)
        // fetch(`/api`)
        .then((res) => res.json())
        .then((data) =>setMessage(data.message))
        .catch(() => setMessage("Failed to load"))

// cleanup function is also called
        // return ()    // components unmount 
    }, []  ) // components did updatation

if(loading) return <h2>Loading...</h2>
if(error) return <h2>Error:</h2>

    return(
        <div>
            <h1>Welcome to chai code</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            <h3>{chai.name}</h3>
        </div>
    )
}