import React from 'react'
import {Router,Route} from 'react-router-dom'
import history from './History'

import Header from './Header'
import LandingPage from './QuestionPages/LandingPage'
import TakeTest from './TestPages/TakeTest'

import createQuestions from './QuestionPages/CreateQuestions'
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