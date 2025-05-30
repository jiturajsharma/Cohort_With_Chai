import { useState, useEffect } from "react"

export function App(){
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
    return(
        <div>
            <h1>Welcome to chai code</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
        </div>
    )
}