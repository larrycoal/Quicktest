import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetch } from '../../Actions'
import '../stylesheet/main.css'

import Test from './createTest'


class LandingPage extends React.Component {
    state = { switchPage: false }
    componentDidMount() {
        this.props.fetch()
    }

    renderIntro() {
        return (
            <div className="intro">
                <h2>Welcome to Quick Test</h2>
                <p>we provide fast and reliable testing platform</p>
                <button onClick={() => { this.setState({ switchPage: true }) }} className="ui button red" >Create Test</button>
            </div>
        )
    }
    renderList = () => {
        console.log(this.props)
        if (!this.props.test) {
            return
        }
        return Object.values(this.props.test).map(test => {
            let url=`/quicktest/${test.testName}/${test.userId}`
            return (
                <tr key={test.testName}>
                    <th>{test.author}</th>
                    <th>{test.testName}</th>
                    <th>
                        {
                     <Link to={url}>copy link</Link>
                    }
                    </th>
                    <th>
                        {<Link to={`/new/${test.testName}`} className="ui button red">Add</Link>}
                    </th>
                </tr>
            )
        })
    }
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
        return (
            <table className="ui very basic table" >
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Test</th>
                        <th>Link</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>{this.renderList()}</tbody>
            </table>
        )
    }

    render() {
        return (
            <div className="landing-page">
                <div>
                    {this.renderIntro()}
                </div>
                <div className="bottom-page">
                    {this.renderPage()}
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