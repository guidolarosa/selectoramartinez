import axios from "axios"

export const sendContactMail = async (
    recipientMail, 
    name, 
    email, 
    zone, 
    phone, 
    message ) => {

    const data = {
        recipientMail, 
        name, 
        email, 
        zone, 
        phone, 
        message
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}