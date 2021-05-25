import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';
import {BrowserRouter} from 'react-router-dom'



describe('Contact Component', () => {

    test('Check email input', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        document.getElementById('email').value = "nikolayski@abv.bg";
        expect(document.getElementById('email').value).toBe("nikolayski@abv.bg");
    })

    test('Check textarea input', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        document.getElementById('textarea').value = "Hello guys.";
        expect(document.getElementById('textarea').value).toBe("Hello guys.");
    })

    test('Check', async () => {

        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );
        document.getElementById('email').value = "nikolayski@abv.bg";
        document.getElementById('textarea').value = "Hello guys.";
        fireEvent.click(screen.getByText('Send'));
        expect(document.getElementsByClassName('contact-form-message')[0]).toBe('Successfully sent!');

    })
})


