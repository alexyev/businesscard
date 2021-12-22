import React from 'react'
import ReactDOM from 'react-dom'
import Info from './components/Info.js'
import Footer from './components/Footer.js'
import Interests from './components/Interests.js'
import About from './components/About.js'

function App () {
    return (
    <>
        <Info />
        <About />
        <Interests />
        <Footer />
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
