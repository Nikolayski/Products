import { Button, FormControl, Input, InputLabel, TextareaAutosize } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './Contact.css';
import * as ProdService from '../../services/CopmonentService';

const Contact = props => {
    const [contactMessage, SetContactMessage] = useState('');

    const contactHandler = e => {
        e.preventDefault();
        const [email, description] = e.target;
        var contact = {
            email: email.value,
            description: description.value
        }
        ProdService.AddContact(contact)
            .then(data => {
                email.value = '';
                description.value = '';
                SetContactMessage("Successfully sent!")
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
                    <TextareaAutosize id="textarea" rowsMin="19" cols="55" type="text" name="description" placeholder="Description" />
                </FormControl>
                <Button className="contact-form-button" variant="contained" color="primary" type="submit" >Send</Button>
               <strong className="contact-form-message" style={{textAlign:'center', marginTop:'15px', fontSize:'20px'}}>{contactMessage}</strong>
            </form>
            <img src='https://qph.fs.quoracdn.net/main-qimg-cac801530f86c7d4d3923cce62cb4233.webp' />
        </section>

    )
}

export default Contact;