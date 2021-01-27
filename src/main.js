import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Hero} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}