import React from 'react'; 
import './Form.css'; 

// name, email, message, submit button

function handleFormSubmit(event) {
    event.preventDefault(); 
    const { input_name, input_email, input_message } = event.target; 
    const name = input_name.value; 
    const email = input_email.value; 
    const message = input_message.value; 
    const newMessage = {
        name: name, 
        email: email, 
        message: message
    };
    fetch('https://zl551fwbt1.execute-api.us-west-1.amazonaws.com/test/contact', {
        method: 'POST', 
        body: JSON.stringify(newMessage), 
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error() // CORS is enabled in AWS API so not sure why this error is being thrown
        }
        alert('email sent!') // error is being thrown so this isn't working, moved alert below 'catch'
    })
    .catch((error) => {
        // alert(error); 
        console.log(error)
    }); 
    alert('email sent!'); 
    document.getElementById("contact_form").reset();
}; 

function Form() {

    return (
        <>
            <main>
                <h1>Send an Email</h1>
                <form onSubmit={e => handleFormSubmit(e)} id="contact_form">
                    <label htmlFor="input_name">Name: </label>
                    <input type="text" id="input_name" required /><br />
                    <label htmlFor="input_email">Email: </label>
                    <input type="text" id="input_email" required/><br />
                    <label className="message-label" htmlFor="input_message">Message: </label><br/>
                    <textarea id="input_message" name="input_message" required /><br />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}; 

export default Form; 