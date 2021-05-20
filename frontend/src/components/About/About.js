import React, { useContext } from 'react';
import './About.css';

const About = (props) => {
    return (
        <section className="about-wrapper">
            <article style={{ background: '#2992FF' }}>
                <h1>Our portal contains all of your needs</h1>
                <p> Sales, Profits, Business</p>
            </article>
            <article className="divs">
                <div className="div1">
                    <p >Products</p>
                </div>
                <img src="https://image.freepik.com/free-vector/sale-web-layout-landing-page-set-business-planning-development-sales-promotion-stimulation-comercial-profit_277904-12119.jpg" />
                <div className="div2">
                    <p>Buy/Sell</p>
                </div>
                <div className="div3">
                    <p >Profits</p>
                </div>
            </article>
            <article className="about-info">
                <h2>Earn Easy Money</h2>
                <p className="about-info-content">
                    If asked to describe the ideal product to sell, you might say something like “large profit margin,” or “easy to produce” or “high market demand.”
                    Or you might say “socks.” I don’t know you.
                    But the first three are all attractive ways to describe a business model – because they can get you quite a bit of revenue at little cost.
                    If you like the sound of that, information products may be for you. These are products that provide customers with some sort of information, often educational. Think ebooks or online courses.
                    With the right information product idea, you can stand to make a lot of money—and in some cases it can be the whole your business.
                </p>
            </article>
        </section>
    )
}

export default About;
