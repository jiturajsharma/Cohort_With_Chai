import { useState } from "react";

export function useContactForm(){
    const [loading, setLoading] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)


    const submitContact = async(formData) => {
        setLoading(true)
        setSuccessMessage(null)
        setErrorMessage(null)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(!res.ok) throw new Error(data.error || "Something went wrong",
                setSuccessMessage(data.success || "Message send")
            )
        } catch (error) {
            setErrorMessage(error.message || "Request faield")
        } finally{
            setLoading(false)
        }
    }
        return{
            loading, 
            successMessage,
            errorMessage,
            submitContact,
        }
}