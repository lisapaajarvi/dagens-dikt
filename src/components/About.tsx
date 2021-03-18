import React, { CSSProperties } from 'react';
import marsvin1 from '../assets/logo-classic.jpg';
import marsvin2 from '../assets/logo-lights.jpg';
import marsvin3 from '../assets/logo-space.jpg';

function About() {

    return(
         <div style= {aboutContainer}>
            <div style={ marsvinContainer }>
                <img src={ marsvin1 } style={ marsvinStyle } alt="Marsvin1" />
                <img src={ marsvin2 } style={ marsvinStyle } alt="Marsvin2" />
                <img src={ marsvin3 } style={ marsvinStyle } alt="Marsvin3" />
            </div>
            <div style= {aboutDiv}>
                <h3>Om "dagens dikt"</h3>
                <p>Dagens dikt är ett skolprojekt skapat av Lisa Pääjärvi, Jonas Glingert och Tony Martinsson inom ramarna för kursen 
                    "Javascript fortsättning" på Medieinstitutets utbildning till Front-End Developer VT2021.</p>
                <p>Dikterna kommer från <a href= "https://www.poemist.com/" target="_blank" rel="noreferrer">Poemist API</a>. </p>
            </div>

        </div>


    )
}

const aboutContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
}

const aboutDiv: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem'
}
const marsvinContainer: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
}

const marsvinStyle: CSSProperties = {
    display: 'flex',
    width: '30%',
    margin: '1rem 0.5rem',
    border: '1px solid black',
    borderRadius: '20rem'
}

export default About;