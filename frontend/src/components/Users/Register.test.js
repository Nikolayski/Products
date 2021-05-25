import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

describe('Register Component',  () => {
    test('Password and ConfirmPassowrd are different', () => {
        render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
        )
        var email = document.getElementById('email');
        email.value = "abc@gmail.com";;
        var password = document.getElementById('password');
        password.value = "123";
        var confirmPassword = document.getElementById('confirmPassword');
        confirmPassword.value = "1234";
        fireEvent.click(screen.getByText('Register'));
        expect(document.getElementsByClassName('reg-span-email-error')[0].innerHTML).toBe('Email is already taken!')
         
    })
})