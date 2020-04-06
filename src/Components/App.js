import React from 'react'
import {Router,Route} from 'react-router-dom'
import history from './History'

import Header from './Header'
import LandingPage from './Pages/LandingPage'
import TakeTest from './Pages/TakeTest'

import createQuestions from './Pages/CreateQuestions'
import './stylesheet/main.css'

const App = () => {
    return (
        <div className="main">
            <Router history={history}>
            <Header />
            <Route path='/' exact component={LandingPage}/>
            <Route path='/new/:testName' exact component={createQuestions}/>
            <Route path='/quicktest/:testname/:testId' exact component={TakeTest}/>
            </Router>
        </div>
    )
}
export default App