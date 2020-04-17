import React from 'react';
import './About.css';
import Container from '@material-ui/core/Container';
import gatorLogo from './gator-logo.png';

export default function About() {
    return (
        <div>

            <div className="about-header">
                <h1>About us</h1>
            </div>

            <div>
                <Container>
                    <img className="gator" src={gatorLogo}></img>
                    <div className="about-body">
                        <p>I have been self-employed my whole adult life, starting a reselling business at the age of 18. Through my love for fashion, I became interested in vintage clothing from the 1980s and 1990s. This led to me acquiring clothing from thrift stores throughout Florida and turning it into profit. My online business grew and was able to sell hundreds of items on a reselling platform called Depop. As my sales grew, so did my following. Now I have over 24,000 followers on the app. However, this was a means to an end for me. My real goal was to raise money to start my own clothing business where I am the head designer. I hope to use my popularity on the platform to sell my own clothes and make a living through that. That is the brief story of Y-Naught.</p>
                        <i>-Derek Baltar CEO</i>
                    </div>

                </Container>
            </div>

            <div className="team">

            </div>
        </div>

    )
};
