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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo sagittis tortor sit amet placerat. Nulla suscipit sem accumsan urna auctor sollicitudin. Nulla commodo ornare hendrerit. Duis tellus eros, vehicula dictum bibendum quis, tincidunt ut quam. Mauris molestie lectus convallis, lobortis lectus et, condimentum lacus. Praesent urna augue, tempus et vehicula ac, gravida non elit. Donec libero turpis, volutpat sed fermentum sit amet, porttitor ut turpis. Quisque est dui, tincidunt et odio sollicitudin, facilisis lobortis tortor. Nam interdum lacinia risus in sodales. Pellentesque vel eros ut mauris bibendum sodales. Vestibulum quis tempus dui, at posuere dui. Cras laoreet dui diam, eu tincidunt nisl vehicula vel.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo sagittis tortor sit amet placerat. Nulla suscipit sem accumsan urna auctor sollicitudin. Nulla commodo ornare hendrerit. Duis tellus eros, vehicula dictum bibendum quis, tincidunt ut quam. Mauris molestie lectus convallis, lobortis lectus et, condimentum lacus. Praesent urna augue, tempus et vehicula ac, gravida non elit. Donec libero turpis, volutpat sed fermentum sit amet, porttitor ut turpis. Quisque est dui, tincidunt et odio sollicitudin, facilisis lobortis tortor. Nam interdum lacinia risus in sodales. Pellentesque vel eros ut mauris bibendum sodales. Vestibulum quis tempus dui, at posuere dui. Cras laoreet dui diam, eu tincidunt nisl vehicula vel.</p>
                    </div>

                </Container>
            </div>

            <div className="team">

            </div>
        </div>

    )
};
