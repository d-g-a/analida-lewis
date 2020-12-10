import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Noticias from "./pages/Noticias"
import Noticia from './pages/Noticia'
import Trabajo from './pages/Trabajo'
import Contacto from './pages/Contacto'
import Prensa from './pages/Prensa'



function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route component={Home} path="/" exact/>
                    <Route component={About} path="/about" exact/>
                    <Route component={Noticias} path="/noticias" exact/>
                    <Route component={Noticia} path="/noticia" exact/>
                    <Route component={Contacto} path="/contacto" exact/>
                    <Route component={Trabajo} path="/trabajo" exact/>
                    <Route component={Prensa} path="/prensa" exact/>
                    {/* <Route component={} path="/:slug" exact/> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router
