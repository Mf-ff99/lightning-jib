import React from 'react'
// import Main from './main'
// import Nav from '../Components/NavBar/NavBar'
import '../styles/styles.css'
// import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero.js'
import Layout from '../Components/layout.js'

export default function index() {
    return (
        <Layout>
        <main>
            <div className="App">
                <Hero />
            </div>
        </main>
        </Layout>            
    );
}