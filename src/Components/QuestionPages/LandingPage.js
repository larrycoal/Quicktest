import React from 'react'
import { connect } from 'react-redux'

import { fetch } from '../../Actions'
import '../stylesheet/main.css'
import TestList from './TestList'
import Test from './createTest'


class LandingPage extends React.Component {
    state = { switchPage: false, active: "testlist" }
    componentDidMount() {
        this.props.fetch()
    }

    renderIntro() {
        return (
            <div className="intro">
                <div className="intro-message">
                    <h2>Welcome to Quick Test</h2>
                    <p>we provide fast and reliable testing platform</p>
                </div>
                <div className="create-test">
                    <button onClick={() => { this.setState({ switchPage: true }) }} className="ui button red" >Create Test</button>
                    <button className="ui button red" >view result</button>
                </div>
            </div>
        )
    }

    //{<Link to={`/new/${test.testName}`} className="ui button red">Add</Link>}
    onTestSubmit() {
        this.setState({ switchPage: false })
        this.props.fetch()
    }
    renderPage() {
        if (this.state.switchPage) {
            return (
                <Test onSubmit={() => { this.onTestSubmit() }} />
            )
        }

        else if (this.state.active === "testlist")
            return (
                <TestList test={this.props.test} />
            )
    }

    render() {
        return (
            <div className="landing-page">
                <div className="top-div">
                    {this.renderIntro()}
                </div>
                <div className="dashboard-page">
                    <div className="dashboard-text">
                        <h1>Your Test</h1>
                    </div>
                    <div className="dashboard-content">
                        <div className="list-btn">
                            <section className="active"><button >Test</button></section>
                            <section><button>Result</button></section>
                        </div>
                        <div className="test-content">
                            {this.renderPage()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}
export default connect(mapStateToProps, { fetch })(LandingPage)