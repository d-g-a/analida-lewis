import React from 'react'
import { Link } from 'react-router-dom'
import LayoutStyles from './Layout.styles'
import Footer from '../Footer'
import Nav from "../Nav/Nav"


function Layout(props) {
    return (
        <LayoutStyles>
            <div className="title">
                <Link to="/"><h1>ANALIDA LEWIS</h1></Link>
            </div>
            <hr/>
            <Nav/>
            <p>
                {props.children}
            </p>
            <Footer/>
        </LayoutStyles>
    )
}

export default Layout
