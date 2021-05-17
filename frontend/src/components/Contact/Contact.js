import { Button, FormControl, Input, InputLabel, TextareaAutosize } from '@material-ui/core';
import React, { useContext } from 'react';
import './Contact.css';

const Contact = props => {

    const contactHandler = e => {
        e.preventDefault();
        const[email, description] = e.target;
        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email.value, description: description.value}),
          })
          .then(res => res.text())
          .then(data => {
              email.value = '';
              description.value = '';
          })
          .catch(error => console.log(error));
    }
    return (
        <section className="contact-wrapper">
            <img src="http://toolsinaction.com/wp-content/uploads/2008/08/Question-mark.png" />
            <form onSubmit={contactHandler} className="contact-form">
                <FormControl className="form-control">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input type="email" id="email" name="email" />
                </FormControl>
                <FormControl className="form-control">
                    <TextareaAutosize rowsMin="19" cols="55" type="text"  name="description" placeholder="Description" />
                </FormControl>
                <Button variant="contained" color="primary" type="submit" >Send</Button>
            </form>
            <img src='https://qph.fs.quoracdn.net/main-qimg-cac801530f86c7d4d3923cce62cb4233.webp' />
        </section>

    )
}

export default Contact;