import React from "react"
import Nav from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

export default function Layout(props) {
    console.log(props)
  return (
      <>
    <Nav />
    <main>
      {props.children}
    </main>
    <Footer />
    </>
  )
}