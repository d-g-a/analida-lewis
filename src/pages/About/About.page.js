import React from 'react'
import AboutStyled from './About.styles'

function About() {
    
    return (
        <AboutStyled>
            <div className="bio">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="portrait">
                <img src="https://media.vogue.mx/photos/5c0718843b462916514d73a5/master/pass/la_casa_estudio_de_analida_lewis_en_panama_175613388.jpg" alt="Analida Lewis"/>
            </div>
        </AboutStyled>
    )
}

export default About